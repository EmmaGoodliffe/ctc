
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.44.3' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/Icon.svelte generated by Svelte v3.44.3 */

    const file$3 = "src/Icon.svelte";

    function create_fragment$3(ctx) {
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			img = element("img");
    			if (!src_url_equal(img.src, img_src_value = /*url*/ ctx[0])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*altText*/ ctx[1]);
    			attr_dev(img, "class", "w-6 h-6 mr-2");
    			add_location(img, file$3, 4, 0, 65);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, img, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*url*/ 1 && !src_url_equal(img.src, img_src_value = /*url*/ ctx[0])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*altText*/ 2) {
    				attr_dev(img, "alt", /*altText*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(img);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Icon', slots, []);
    	let { url } = $$props;
    	let { altText } = $$props;
    	const writable_props = ['url', 'altText'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('url' in $$props) $$invalidate(0, url = $$props.url);
    		if ('altText' in $$props) $$invalidate(1, altText = $$props.altText);
    	};

    	$$self.$capture_state = () => ({ url, altText });

    	$$self.$inject_state = $$props => {
    		if ('url' in $$props) $$invalidate(0, url = $$props.url);
    		if ('altText' in $$props) $$invalidate(1, altText = $$props.altText);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [url, altText];
    }

    class Icon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { url: 0, altText: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*url*/ ctx[0] === undefined && !('url' in props)) {
    			console.warn("<Icon> was created without expected prop 'url'");
    		}

    		if (/*altText*/ ctx[1] === undefined && !('altText' in props)) {
    			console.warn("<Icon> was created without expected prop 'altText'");
    		}
    	}

    	get url() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get altText() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set altText(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Button.svelte generated by Svelte v3.44.3 */
    const file$2 = "src/Button.svelte";

    function create_fragment$2(ctx) {
    	let a;
    	let button;
    	let icon;
    	let t0;
    	let t1;
    	let current;

    	icon = new Icon({
    			props: {
    				url: /*iconUrl*/ ctx[0],
    				altText: /*altText*/ ctx[2]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			a = element("a");
    			button = element("button");
    			create_component(icon.$$.fragment);
    			t0 = space();
    			t1 = text(/*text*/ ctx[1]);
    			attr_dev(button, "class", "flex items-center justify-between rounded border border-sky-800 px-4 py-2");
    			add_location(button, file$2, 8, 2, 188);
    			attr_dev(a, "href", /*url*/ ctx[3]);
    			attr_dev(a, "class", "mr-4 mb-2 min-w-max");
    			add_location(a, file$2, 7, 0, 143);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, button);
    			mount_component(icon, button, null);
    			append_dev(button, t0);
    			append_dev(button, t1);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const icon_changes = {};
    			if (dirty & /*iconUrl*/ 1) icon_changes.url = /*iconUrl*/ ctx[0];
    			if (dirty & /*altText*/ 4) icon_changes.altText = /*altText*/ ctx[2];
    			icon.$set(icon_changes);
    			if (!current || dirty & /*text*/ 2) set_data_dev(t1, /*text*/ ctx[1]);

    			if (!current || dirty & /*url*/ 8) {
    				attr_dev(a, "href", /*url*/ ctx[3]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			destroy_component(icon);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Button', slots, []);
    	let { iconUrl } = $$props;
    	let { text } = $$props;
    	let { altText = text } = $$props;
    	let { url } = $$props;
    	const writable_props = ['iconUrl', 'text', 'altText', 'url'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('iconUrl' in $$props) $$invalidate(0, iconUrl = $$props.iconUrl);
    		if ('text' in $$props) $$invalidate(1, text = $$props.text);
    		if ('altText' in $$props) $$invalidate(2, altText = $$props.altText);
    		if ('url' in $$props) $$invalidate(3, url = $$props.url);
    	};

    	$$self.$capture_state = () => ({ Icon, iconUrl, text, altText, url });

    	$$self.$inject_state = $$props => {
    		if ('iconUrl' in $$props) $$invalidate(0, iconUrl = $$props.iconUrl);
    		if ('text' in $$props) $$invalidate(1, text = $$props.text);
    		if ('altText' in $$props) $$invalidate(2, altText = $$props.altText);
    		if ('url' in $$props) $$invalidate(3, url = $$props.url);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [iconUrl, text, altText, url];
    }

    class Button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { iconUrl: 0, text: 1, altText: 2, url: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*iconUrl*/ ctx[0] === undefined && !('iconUrl' in props)) {
    			console.warn("<Button> was created without expected prop 'iconUrl'");
    		}

    		if (/*text*/ ctx[1] === undefined && !('text' in props)) {
    			console.warn("<Button> was created without expected prop 'text'");
    		}

    		if (/*url*/ ctx[3] === undefined && !('url' in props)) {
    			console.warn("<Button> was created without expected prop 'url'");
    		}
    	}

    	get iconUrl() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set iconUrl(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get altText() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set altText(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get url() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Card.svelte generated by Svelte v3.44.3 */
    const file$1 = "src/Card.svelte";

    // (14:4) {#if isNew}
    function create_if_block(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "New";
    			attr_dev(span, "class", "new");
    			add_location(span, file$1, 14, 6, 344);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(14:4) {#if isNew}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let div1;
    	let header;
    	let t0;
    	let t1;
    	let t2;
    	let div0;
    	let button0;
    	let t3;
    	let button1;
    	let t4;
    	let button2;
    	let t5;
    	let current;
    	let if_block = /*isNew*/ ctx[1] && create_if_block(ctx);

    	button0 = new Button({
    			props: {
    				altText: "Windows logo",
    				iconUrl: "https://img.icons8.com/ios-filled/50/000000/windows-10.png",
    				text: "Windows via Steam",
    				url: /*windowsUrl*/ ctx[2]
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				altText: "Apple logo",
    				iconUrl: "https://img.icons8.com/ios-filled/30/000000/mac-os.png",
    				text: "iOS",
    				url: /*appleUrl*/ ctx[3]
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				altText: "Android logo",
    				iconUrl: "https://img.icons8.com/ios-filled/50/000000/android-os.png",
    				text: "Android",
    				url: /*androidUrl*/ ctx[4]
    			},
    			$$inline: true
    		});

    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			header = element("header");
    			t0 = text(/*title*/ ctx[0]);
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();
    			div0 = element("div");
    			create_component(button0.$$.fragment);
    			t3 = space();
    			create_component(button1.$$.fragment);
    			t4 = space();
    			create_component(button2.$$.fragment);
    			t5 = space();
    			if (default_slot) default_slot.c();
    			attr_dev(header, "class", "text-lg font-semibold mb-4 flex items-center");
    			add_location(header, file$1, 11, 2, 248);
    			attr_dev(div0, "class", "flex flex-wrap text-sm");
    			add_location(div0, file$1, 18, 2, 398);
    			attr_dev(div1, "class", "bg-sky-200 shadow w-11/12 md:w-5/12 my-2 px-8 py-6");
    			add_location(div1, file$1, 8, 0, 178);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, header);
    			append_dev(header, t0);
    			append_dev(header, t1);
    			if (if_block) if_block.m(header, null);
    			append_dev(div1, t2);
    			append_dev(div1, div0);
    			mount_component(button0, div0, null);
    			append_dev(div0, t3);
    			mount_component(button1, div0, null);
    			append_dev(div0, t4);
    			mount_component(button2, div0, null);
    			append_dev(div1, t5);

    			if (default_slot) {
    				default_slot.m(div1, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);

    			if (/*isNew*/ ctx[1]) {
    				if (if_block) ; else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					if_block.m(header, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			const button0_changes = {};
    			if (dirty & /*windowsUrl*/ 4) button0_changes.url = /*windowsUrl*/ ctx[2];
    			button0.$set(button0_changes);
    			const button1_changes = {};
    			if (dirty & /*appleUrl*/ 8) button1_changes.url = /*appleUrl*/ ctx[3];
    			button1.$set(button1_changes);
    			const button2_changes = {};
    			if (dirty & /*androidUrl*/ 16) button2_changes.url = /*androidUrl*/ ctx[4];
    			button2.$set(button2_changes);

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[5],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
    						null
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			if (if_block) if_block.d();
    			destroy_component(button0);
    			destroy_component(button1);
    			destroy_component(button2);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Card', slots, ['default']);
    	let { title } = $$props;
    	let { isNew = false } = $$props;
    	let { windowsUrl } = $$props;
    	let { appleUrl } = $$props;
    	let { androidUrl } = $$props;
    	const writable_props = ['title', 'isNew', 'windowsUrl', 'appleUrl', 'androidUrl'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Card> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('isNew' in $$props) $$invalidate(1, isNew = $$props.isNew);
    		if ('windowsUrl' in $$props) $$invalidate(2, windowsUrl = $$props.windowsUrl);
    		if ('appleUrl' in $$props) $$invalidate(3, appleUrl = $$props.appleUrl);
    		if ('androidUrl' in $$props) $$invalidate(4, androidUrl = $$props.androidUrl);
    		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Button,
    		title,
    		isNew,
    		windowsUrl,
    		appleUrl,
    		androidUrl
    	});

    	$$self.$inject_state = $$props => {
    		if ('title' in $$props) $$invalidate(0, title = $$props.title);
    		if ('isNew' in $$props) $$invalidate(1, isNew = $$props.isNew);
    		if ('windowsUrl' in $$props) $$invalidate(2, windowsUrl = $$props.windowsUrl);
    		if ('appleUrl' in $$props) $$invalidate(3, appleUrl = $$props.appleUrl);
    		if ('androidUrl' in $$props) $$invalidate(4, androidUrl = $$props.androidUrl);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [title, isNew, windowsUrl, appleUrl, androidUrl, $$scope, slots];
    }

    class Card extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			title: 0,
    			isNew: 1,
    			windowsUrl: 2,
    			appleUrl: 3,
    			androidUrl: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[0] === undefined && !('title' in props)) {
    			console.warn("<Card> was created without expected prop 'title'");
    		}

    		if (/*windowsUrl*/ ctx[2] === undefined && !('windowsUrl' in props)) {
    			console.warn("<Card> was created without expected prop 'windowsUrl'");
    		}

    		if (/*appleUrl*/ ctx[3] === undefined && !('appleUrl' in props)) {
    			console.warn("<Card> was created without expected prop 'appleUrl'");
    		}

    		if (/*androidUrl*/ ctx[4] === undefined && !('androidUrl' in props)) {
    			console.warn("<Card> was created without expected prop 'androidUrl'");
    		}
    	}

    	get title() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isNew() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isNew(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get windowsUrl() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set windowsUrl(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get appleUrl() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set appleUrl(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get androidUrl() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set androidUrl(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.44.3 */
    const file = "src/App.svelte";

    // (31:6) <Card         title="Sudoku Pad"         isNew={true}         windowsUrl="https://store.steampowered.com/app/1706870/Svens_SudokuPad/"         appleUrl="https://apps.apple.com/us/app/svens-sudokupad/id1570622073"         androidUrl="https://play.google.com/store/apps/details?id=com.svencodes.sudokupad"       >
    function create_default_slot(ctx) {
    	let p;

    	const block = {
    		c: function create() {
    			p = element("p");
    			p.textContent = "Search for \"SudokuPad\" on Amazon";
    			add_location(p, file, 37, 8, 1441);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(31:6) <Card         title=\\\"Sudoku Pad\\\"         isNew={true}         windowsUrl=\\\"https://store.steampowered.com/app/1706870/Svens_SudokuPad/\\\"         appleUrl=\\\"https://apps.apple.com/us/app/svens-sudokupad/id1570622073\\\"         androidUrl=\\\"https://play.google.com/store/apps/details?id=com.svencodes.sudokupad\\\"       >",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let main;
    	let nav;
    	let a0;
    	let t1;
    	let a1;
    	let t3;
    	let div1;
    	let h1;
    	let t5;
    	let p0;
    	let t6;
    	let a2;
    	let t8;
    	let t9;
    	let div0;
    	let card0;
    	let t10;
    	let card1;
    	let t11;
    	let card2;
    	let t12;
    	let card3;
    	let t13;
    	let card4;
    	let t14;
    	let card5;
    	let t15;
    	let card6;
    	let t16;
    	let card7;
    	let t17;
    	let h20;
    	let icon0;
    	let t18;
    	let t19;
    	let a3;
    	let t21;
    	let h21;
    	let icon1;
    	let t22;
    	let t23;
    	let a4;
    	let t25;
    	let h22;
    	let icon2;
    	let t26;
    	let t27;
    	let a5;
    	let t29;
    	let h23;
    	let t31;
    	let p1;
    	let a6;
    	let t33;
    	let t34;
    	let h30;
    	let t36;
    	let p2;
    	let t38;
    	let h31;
    	let t40;
    	let p3;
    	let t41;
    	let a7;
    	let t43;
    	let t44;
    	let h32;
    	let t46;
    	let p4;
    	let t48;
    	let h33;
    	let t50;
    	let p5;
    	let t52;
    	let h34;
    	let t54;
    	let p6;
    	let t56;
    	let h35;
    	let t58;
    	let p7;
    	let t60;
    	let h36;
    	let t62;
    	let p8;
    	let t64;
    	let h37;
    	let t66;
    	let p9;
    	let t68;
    	let p10;
    	let t70;
    	let p11;
    	let t72;
    	let p12;
    	let t74;
    	let p13;
    	let current;

    	card0 = new Card({
    			props: {
    				title: "Sudoku Pad",
    				isNew: true,
    				windowsUrl: "https://store.steampowered.com/app/1706870/Svens_SudokuPad/",
    				appleUrl: "https://apps.apple.com/us/app/svens-sudokupad/id1570622073",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.svencodes.sudokupad",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				title: "Arrow Sudoku App",
    				isNew: true,
    				windowsUrl: "https://store.steampowered.com/app/1613680/Arrow_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/arrow-sudoku/id1568407537",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.ArrowSudoku"
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				title: "Killer Sudoku App",
    				windowsUrl: "https://store.steampowered.com/app/1471910/Killer_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/killer-sudoku-ctc/id1544165118",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.KillerSudoku&hl=en_US≷=US"
    			},
    			$$inline: true
    		});

    	card3 = new Card({
    			props: {
    				title: "Miracle Sudoku App",
    				windowsUrl: "https://store.steampowered.com/app/1377260/Miracle_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/id1527363795",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.MiracleSudokuCTC"
    			},
    			$$inline: true
    		});

    	card4 = new Card({
    			props: {
    				title: "Thermo Sudoku App",
    				windowsUrl: "https://store.steampowered.com/app/1316390/Thermo_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/thermo-sudoku/id1513994223",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.ThermoSudoku"
    			},
    			$$inline: true
    		});

    	card5 = new Card({
    			props: {
    				title: "Chess Sudoku App",
    				windowsUrl: "https://store.steampowered.com/app/1250560/Chess_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/chess-sudoku/id1500654482?ls=1",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.ChessSudoku&hl=en_US"
    			},
    			$$inline: true
    		});

    	card6 = new Card({
    			props: {
    				title: "Classic Sudoku App",
    				windowsUrl: "https://store.steampowered.com/app/1188330/Classic_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/classic-sudoku/id1488838275?ls=1",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.ClassicSudoku&hl=en_US"
    			},
    			$$inline: true
    		});

    	card7 = new Card({
    			props: {
    				title: "Sandwich Sudoku App",
    				windowsUrl: "https://store.steampowered.com/app/1117310/Sandwich_Sudoku/",
    				appleUrl: "https://apps.apple.com/us/app/sandwich-sudoku/id1476116705?ls=1",
    				androidUrl: "https://play.google.com/store/apps/details?id=com.StudioGoya.SandwichSudoku"
    			},
    			$$inline: true
    		});

    	icon0 = new Icon({
    			props: {
    				url: "https://img.icons8.com/ios-filled/24/000000/clothes.png",
    				altText: "Merchandise"
    			},
    			$$inline: true
    		});

    	icon1 = new Icon({
    			props: {
    				url: "https://img.icons8.com/ios-filled/50/000000/discord-logo.png",
    				altText: "Discord"
    			},
    			$$inline: true
    		});

    	icon2 = new Icon({
    			props: {
    				url: "https://img.icons8.com/material/24/000000/patreon.png",
    				altText: "Patreon"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			main = element("main");
    			nav = element("nav");
    			a0 = element("a");
    			a0.textContent = "Home";
    			t1 = space();
    			a1 = element("a");
    			a1.textContent = "FAQs";
    			t3 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Cracking the Cryptic";
    			t5 = space();
    			p0 = element("p");
    			t6 = text("The PDF of our book is now available! If you backed the ");
    			a2 = element("a");
    			a2.textContent = "Kickstarter";
    			t8 = text(", go to the Jellybeangames email receipt, where there is a button to\n      download the pdf. Delivery of the physical book should be underway soon.");
    			t9 = space();
    			div0 = element("div");
    			create_component(card0.$$.fragment);
    			t10 = space();
    			create_component(card1.$$.fragment);
    			t11 = space();
    			create_component(card2.$$.fragment);
    			t12 = space();
    			create_component(card3.$$.fragment);
    			t13 = space();
    			create_component(card4.$$.fragment);
    			t14 = space();
    			create_component(card5.$$.fragment);
    			t15 = space();
    			create_component(card6.$$.fragment);
    			t16 = space();
    			create_component(card7.$$.fragment);
    			t17 = space();
    			h20 = element("h2");
    			create_component(icon0.$$.fragment);
    			t18 = text("\n      Merchandise");
    			t19 = space();
    			a3 = element("a");
    			a3.textContent = "bla";
    			t21 = space();
    			h21 = element("h2");
    			create_component(icon1.$$.fragment);
    			t22 = text("\n      Discord");
    			t23 = space();
    			a4 = element("a");
    			a4.textContent = "bla";
    			t25 = space();
    			h22 = element("h2");
    			create_component(icon2.$$.fragment);
    			t26 = text("\n      Patreon");
    			t27 = space();
    			a5 = element("a");
    			a5.textContent = "bla";
    			t29 = space();
    			h23 = element("h2");
    			h23.textContent = "Our Back Catalogue";
    			t31 = space();
    			p1 = element("p");
    			a6 = element("a");
    			a6.textContent = "Catalogue";
    			t33 = text(" (all categorised with\n      links)");
    			t34 = space();
    			h30 = element("h3");
    			h30.textContent = "Send us Puzzles to Solve or Contact us";
    			t36 = space();
    			p2 = element("p");
    			p2.textContent = "crackingthecryptic@gmail.com";
    			t38 = space();
    			h31 = element("h3");
    			h31.textContent = "Follow us";
    			t40 = space();
    			p3 = element("p");
    			t41 = text("Twitter: #crypticcracking ");
    			a7 = element("a");
    			a7.textContent = "@crypticcracking";
    			t43 = text(" Instagram (for how to solve daily clues from The Times)");
    			t44 = space();
    			h32 = element("h3");
    			h32.textContent = "Music";
    			t46 = space();
    			p4 = element("p");
    			p4.textContent = "Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata no 16\n      (\"Sonata Facile\")";
    			t48 = space();
    			h33 = element("h3");
    			h33.textContent = "Software";
    			t50 = space();
    			p5 = element("p");
    			p5.textContent = "Play the puzzle in the video by clicking the link under the video (above).\n      Thanks to Sam Cappleman-Lynes and Sven Neumann for their work.";
    			t52 = space();
    			h34 = element("h3");
    			h34.textContent = "Logo Design";
    			t54 = space();
    			p6 = element("p");
    			p6.textContent = "Melvyn Mainini";
    			t56 = space();
    			h35 = element("h3");
    			h35.textContent = "Opening Credits Design";
    			t58 = space();
    			p7 = element("p");
    			p7.textContent = "Joel Blundell";
    			t60 = space();
    			h36 = element("h3");
    			h36.textContent = "About us";
    			t62 = space();
    			p8 = element("p");
    			p8.textContent = "Hi! We're Simon Anthony and Mark Goodliffe, two of the UK's most\n      enthusiastic puzzle solvers. We have both represented the UK at the World\n      Sudoku Championships and the World Puzzle Championships. We're also\n      \"cryptic crossword\" aficionados. Mark is the twelve-time winner of The\n      Times championship and Simon is the former record holder for most\n      consecutive correct solutions to The Listener crossword. We hope we can\n      help your puzzle solving while also introducing you to some of the world's\n      best puzzles.";
    			t64 = space();
    			h37 = element("h3");
    			h37.textContent = "Guidance for Sudoku/Puzzle Submissions";
    			t66 = space();
    			p9 = element("p");
    			p9.textContent = "If you create a puzzle/sudoku that you'd like to see us solve on Cracking\n      The Cryptic then a) FANTASTIC! And b) Please, when sending your submission\n      to us, do make sure you adhere to the following requirements. These help\n      our testers to get through the sheer volume of requests we receive. Thank\n      you.";
    			t68 = space();
    			p10 = element("p");
    			p10.textContent = "1. Make sure your puzzle has been test-solved and contains no errors.";
    			t70 = space();
    			p11 = element("p");
    			p11.textContent = "2. Please indicate in the covering email your preferences as regards your\n      puzzle - i.e. are you only looking for it to appear in a video on the\n      channel; or, if we decide not to video it but like the puzzle, are you\n      happy for us to release it as a community post or on patreon (free or\n      behind the paywall)? “Use it how you choose” covers everything!";
    			t72 = space();
    			p12 = element("p");
    			p12.textContent = "3. Your puzzle email should include: i) the puzzle presented exactly as\n      you'd like our testers to see it; ii) on a separate page, the solution.\n      The solution should include a description of any difficult/interesting\n      steps in the logical path. [This is not for Simon & Mark but is to aid the\n      testers. We endeavour not to publish puzzles that require\n      bifurcation/guesswork so, if a tester feels their only chance to crack a\n      difficult puzzle is using such techniques then it is very likely the\n      puzzle will be rejected. By including the logic path, the tester may\n      appreciate that some logical step WAS reasonable and so still pass the\n      puzzle on to Simon & Mark.";
    			t74 = space();
    			p13 = element("p");
    			p13.textContent = "4. Send the above to: crackingthecryptic@gmail.com Please be aware that we\n      do not have time to reply to submissions. You should assume that, if you\n      hear nothing and the puzzle has not appeared in a video/community\n      post/patreon post within a month then, unfortunately, we have not decided\n      to use the puzzle. At this point, by all means do submit another puzzle\n      (but please do wait this one month period before doing so).";
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "class", "px-4 py-2 font-semibold hover:bg-sky-200 transition-all duration-[400ms] rounded mx-4 mt-2 underline underline-offset-1");
    			add_location(a0, file, 6, 4, 192);
    			attr_dev(a1, "href", "#");
    			attr_dev(a1, "class", "px-4 py-2 font-semibold hover:bg-sky-200 transition-all duration-[400ms] rounded mx-4 mt-2");
    			add_location(a1, file, 11, 4, 369);
    			attr_dev(nav, "class", "flex justify-end px-4");
    			add_location(nav, file, 5, 2, 152);
    			attr_dev(h1, "class", "text-3xl font-semibold mb-6");
    			add_location(h1, file, 18, 4, 558);
    			attr_dev(a2, "href", "https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description");
    			add_location(a2, file, 20, 62, 694);
    			add_location(p0, file, 19, 4, 628);
    			attr_dev(div0, "class", "flex flex-col content-center md:flex-row md:justify-around flex-wrap xl:w-2/3 mx-auto");
    			add_location(div0, file, 27, 4, 1004);
    			add_location(h20, file, 90, 4, 3721);
    			attr_dev(a3, "href", "https://cracking-the-cryptic.creator-spring.com/");
    			add_location(a3, file, 97, 4, 3879);
    			add_location(h21, file, 99, 4, 3951);
    			attr_dev(a4, "href", "https://discord.gg/BbN89j5");
    			add_location(a4, file, 106, 4, 4106);
    			add_location(h22, file, 108, 4, 4156);
    			attr_dev(a5, "href", "https://www.patreon.com/crackingthecryptic");
    			add_location(a5, file, 115, 4, 4304);
    			add_location(h23, file, 117, 4, 4370);
    			attr_dev(a6, "href", "https://tinyurl.com/CTCCatalogue");
    			add_location(a6, file, 119, 6, 4412);
    			add_location(p1, file, 118, 4, 4402);
    			add_location(h30, file, 123, 4, 4518);
    			add_location(p2, file, 124, 4, 4570);
    			add_location(h31, file, 126, 4, 4611);
    			attr_dev(a7, "href", "https://www.instagram.com/crackingthecryptic/?hl=en");
    			add_location(a7, file, 128, 32, 4670);
    			add_location(p3, file, 127, 4, 4634);
    			add_location(h32, file, 134, 4, 4847);
    			add_location(p4, file, 135, 4, 4866);
    			add_location(h33, file, 140, 4, 4987);
    			add_location(p5, file, 141, 4, 5009);
    			add_location(h34, file, 146, 4, 5177);
    			add_location(p6, file, 147, 4, 5202);
    			add_location(h35, file, 149, 4, 5229);
    			add_location(p7, file, 150, 4, 5265);
    			add_location(h36, file, 152, 4, 5291);
    			add_location(p8, file, 153, 4, 5313);
    			add_location(h37, file, 164, 4, 5884);
    			add_location(p9, file, 165, 4, 5936);
    			add_location(p10, file, 172, 4, 6284);
    			add_location(p11, file, 173, 4, 6365);
    			add_location(p12, file, 180, 4, 6761);
    			add_location(p13, file, 192, 4, 7495);
    			attr_dev(div1, "class", "w-11/12 mx-auto");
    			add_location(div1, file, 17, 2, 524);
    			attr_dev(main, "class", "w-full h-full bg-sky-100 text-sky-900");
    			add_location(main, file, 4, 0, 97);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, nav);
    			append_dev(nav, a0);
    			append_dev(nav, t1);
    			append_dev(nav, a1);
    			append_dev(main, t3);
    			append_dev(main, div1);
    			append_dev(div1, h1);
    			append_dev(div1, t5);
    			append_dev(div1, p0);
    			append_dev(p0, t6);
    			append_dev(p0, a2);
    			append_dev(p0, t8);
    			append_dev(div1, t9);
    			append_dev(div1, div0);
    			mount_component(card0, div0, null);
    			append_dev(div0, t10);
    			mount_component(card1, div0, null);
    			append_dev(div0, t11);
    			mount_component(card2, div0, null);
    			append_dev(div0, t12);
    			mount_component(card3, div0, null);
    			append_dev(div0, t13);
    			mount_component(card4, div0, null);
    			append_dev(div0, t14);
    			mount_component(card5, div0, null);
    			append_dev(div0, t15);
    			mount_component(card6, div0, null);
    			append_dev(div0, t16);
    			mount_component(card7, div0, null);
    			append_dev(div1, t17);
    			append_dev(div1, h20);
    			mount_component(icon0, h20, null);
    			append_dev(h20, t18);
    			append_dev(div1, t19);
    			append_dev(div1, a3);
    			append_dev(div1, t21);
    			append_dev(div1, h21);
    			mount_component(icon1, h21, null);
    			append_dev(h21, t22);
    			append_dev(div1, t23);
    			append_dev(div1, a4);
    			append_dev(div1, t25);
    			append_dev(div1, h22);
    			mount_component(icon2, h22, null);
    			append_dev(h22, t26);
    			append_dev(div1, t27);
    			append_dev(div1, a5);
    			append_dev(div1, t29);
    			append_dev(div1, h23);
    			append_dev(div1, t31);
    			append_dev(div1, p1);
    			append_dev(p1, a6);
    			append_dev(p1, t33);
    			append_dev(div1, t34);
    			append_dev(div1, h30);
    			append_dev(div1, t36);
    			append_dev(div1, p2);
    			append_dev(div1, t38);
    			append_dev(div1, h31);
    			append_dev(div1, t40);
    			append_dev(div1, p3);
    			append_dev(p3, t41);
    			append_dev(p3, a7);
    			append_dev(p3, t43);
    			append_dev(div1, t44);
    			append_dev(div1, h32);
    			append_dev(div1, t46);
    			append_dev(div1, p4);
    			append_dev(div1, t48);
    			append_dev(div1, h33);
    			append_dev(div1, t50);
    			append_dev(div1, p5);
    			append_dev(div1, t52);
    			append_dev(div1, h34);
    			append_dev(div1, t54);
    			append_dev(div1, p6);
    			append_dev(div1, t56);
    			append_dev(div1, h35);
    			append_dev(div1, t58);
    			append_dev(div1, p7);
    			append_dev(div1, t60);
    			append_dev(div1, h36);
    			append_dev(div1, t62);
    			append_dev(div1, p8);
    			append_dev(div1, t64);
    			append_dev(div1, h37);
    			append_dev(div1, t66);
    			append_dev(div1, p9);
    			append_dev(div1, t68);
    			append_dev(div1, p10);
    			append_dev(div1, t70);
    			append_dev(div1, p11);
    			append_dev(div1, t72);
    			append_dev(div1, p12);
    			append_dev(div1, t74);
    			append_dev(div1, p13);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			transition_in(card2.$$.fragment, local);
    			transition_in(card3.$$.fragment, local);
    			transition_in(card4.$$.fragment, local);
    			transition_in(card5.$$.fragment, local);
    			transition_in(card6.$$.fragment, local);
    			transition_in(card7.$$.fragment, local);
    			transition_in(icon0.$$.fragment, local);
    			transition_in(icon1.$$.fragment, local);
    			transition_in(icon2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			transition_out(card2.$$.fragment, local);
    			transition_out(card3.$$.fragment, local);
    			transition_out(card4.$$.fragment, local);
    			transition_out(card5.$$.fragment, local);
    			transition_out(card6.$$.fragment, local);
    			transition_out(card7.$$.fragment, local);
    			transition_out(icon0.$$.fragment, local);
    			transition_out(icon1.$$.fragment, local);
    			transition_out(icon2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			destroy_component(card0);
    			destroy_component(card1);
    			destroy_component(card2);
    			destroy_component(card3);
    			destroy_component(card4);
    			destroy_component(card5);
    			destroy_component(card6);
    			destroy_component(card7);
    			destroy_component(icon0);
    			destroy_component(icon1);
    			destroy_component(icon2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Card, Icon });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {},
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
