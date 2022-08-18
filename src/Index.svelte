<script lang="ts">
  import "./common";
  import Card from "./Card.svelte";
  import FAQ from "./FAQ.svelte";
  import Info from "./Info.svelte";
  import Nav from "./Nav.svelte";
</script>

<Nav />
<header class="contain">
  <div class="flex flex-col md:flex-row md:h-auto">
    <div class="flex flex-col">
      <h1 class="mt-4 md:mt-2">Cracking the Cryptic</h1>
      <div class="mt-4 md:mt-12 pr-12">
        <p>
          We are a Youtube channel called <a
            href="https://www.youtube.com/c/CrackingTheCryptic"
            target="_blank">Cracking the Cryptic</a
          >.
        </p>
        <p>
          The PDF of our book is now available! If you backed the <a
            href="https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description"
            target="_blank">Kickstarter</a
          >, go to the Jellybeangames email receipt, where there is a button to
          download the pdf. Delivery of the physical book should be underway
          soon.
        </p>
      </div>
    </div>
    <div
      class="w-11/12 sm:w-8/12 md:w-5/12 max-w-[768px] h-auto md:h-full object-cover mx-auto md:mx-0 mt-12 md:mt-24 bg-light translate-x-4 translate-y-4 group hover:translate-x-[1.1rem] hover:translate-y-[1.1rem] hover:rotate-1 transition"
    >
      <img
        src="./img/lads.jpg"
        alt="Simon Anthony and Mark Goodliffe"
        width="768"
        height="768"
        class="text-light -translate-x-4 -translate-y-4 group-hover:-rotate-1 group-hover:-translate-x-[1.1rem] group-hover:-translate-y-[1.1rem] transition"
      />
    </div>
  </div>
</header>

<section class="scroll-m-[26rem] relative overflow-x-hidden" id="apps">
  <img
    src="./img/hexagon.svg"
    alt="Background Logo"
    class="hexagon top-48 md:top-24 -right-[25%] lg:-right-[10%]"
  />
  <img
    src="./img/hexagon.svg"
    alt="Background Logo"
    class="hexagon bottom-48 md:bottom-24 -left-[25%] lg:-left-[10%]"
  />
  <div class="contain">
    <h2>Apps</h2>
    <div
      class="flex flex-col content-center md:flex-row md:justify-around flex-wrap xl:w-2/3 mx-auto"
    >
      <Card
        title="Sudoku Pad"
        isNew={true}
        windowsUrl="https://store.steampowered.com/app/1706870/Svens_SudokuPad/"
        appleUrl="https://apps.apple.com/us/app/svens-sudokupad/id1570622073"
        androidUrl="https://play.google.com/store/apps/details?id=com.svencodes.sudokupad"
      >
        <p>Search for &ldquo;SudokuPad&rdquo; on Amazon</p>
      </Card>
      <Card
        title="Arrow Sudoku App"
        isNew={true}
        windowsUrl="https://store.steampowered.com/app/1613680/Arrow_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/arrow-sudoku/id1568407537"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.ArrowSudoku"
      />
      <Card
        title="Killer Sudoku App"
        windowsUrl="https://store.steampowered.com/app/1471910/Killer_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/killer-sudoku-ctc/id1544165118"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.KillerSudoku&hl=en_US&gl=US"
      />
      <Card
        title="Miracle Sudoku App"
        windowsUrl="https://store.steampowered.com/app/1377260/Miracle_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/id1527363795"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.MiracleSudokuCTC"
      />
      <Card
        title="Thermo Sudoku App"
        windowsUrl="https://store.steampowered.com/app/1316390/Thermo_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/thermo-sudoku/id1513994223"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.ThermoSudoku"
      />
      <Card
        title="Chess Sudoku App"
        windowsUrl="https://store.steampowered.com/app/1250560/Chess_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/chess-sudoku/id1500654482?ls=1"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.ChessSudoku&hl=en_US"
      />
      <Card
        title="Classic Sudoku App"
        windowsUrl="https://store.steampowered.com/app/1188330/Classic_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/classic-sudoku/id1488838275?ls=1"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.ClassicSudoku&hl=en_US"
      />
      <Card
        title="Sandwich Sudoku App"
        windowsUrl="https://store.steampowered.com/app/1117310/Sandwich_Sudoku/"
        appleUrl="https://apps.apple.com/us/app/sandwich-sudoku/id1476116705?ls=1"
        androidUrl="https://play.google.com/store/apps/details?id=com.StudioGoya.SandwichSudoku"
      />
    </div>
  </div>
</section>

<section class="contain" id="merch">
  <h2>Merch</h2>
  <p>We have some great merchandise available.</p>
  <Info
    title=""
    url="https://cracking-the-cryptic.creator-spring.com/"
    iconUrl=""
  >
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <img src="./img/cap.png" alt="Cap" class="w-1/2 sm:w-1/3 max-w-[16rem]" />
      <img
        src="./img/bottle.png"
        alt="Bottle"
        class="w-1/2 sm:w-1/3 max-w-[16rem]"
      />
      <img
        src="./img/hoodie.png"
        alt="Hoodie"
        class="w-1/2 sm:w-1/3 max-w-[16rem]"
      />
    </div>
  </Info>
</section>

<section class="relative overflow-x-hidden" id="info">
  <img
    src="./img/hexagon.svg"
    alt="Background Logo"
    class="hexagon top-48 md:top-24 -right-[25%] lg:-right-[10%]"
  />
  <img
    src="./img/hexagon.svg"
    alt="Background Logo"
    class="hexagon bottom-48 md:bottom-24 -left-[25%] lg:-left-[10%]"
  />
  <div class="contain">
    <h2>Information</h2>
    <Info
      title="Merchandise"
      url="https://cracking-the-cryptic.creator-spring.com/"
      iconUrl="./img/icon/merch.svg"
    >
      <p>Our merchandise (including birthday merch)</p>
    </Info>
    <Info
      title="Discord"
      url="https://discord.gg/BbN89j5"
      iconUrl="./img/icon/discord.svg"
    >
      <p>Become part of the CTC fan Discord server</p>
    </Info>
    <Info
      title="Patreon"
      url="https://www.patreon.com/crackingthecryptic"
      iconUrl="./img/icon/patreon.svg"
    >
      <p>Join the community, support us and try our puzzle hunts</p>
    </Info>
    <Info
      title="Catalogue"
      url="https://tinyurl.com/CTCCatalogue"
      iconUrl="./img/icon/contents.svg"
      ><p>Our back catalogue (all categorised with links)</p>
    </Info>
    <Info title="Email" iconUrl="./img/icon/email.svg">
      <p>
        Send us puzzles to solve or contact us: <a
          href="mailto:crackingthecryptic@gmail.com"
          >crackingthecryptic@gmail.com</a
        >
      </p>
    </Info>
    <Info title="Snailmail" iconUrl="./img/icon/snail.svg">
      <p>
        Mark Goodliffe / Simon Anthony, Box 102, 56 Gloucester Road, London SW7
        4UB
      </p>
    </Info>
    <Info title="Follow us" iconUrl="./img/icon/social_media.svg">
      <p>
        Twitter:
        <a href="https://twitter.com/crypticcracking" target="_blank"
          >@crypticcracking</a
        >
        <a
          href="https://twitter.com/search?q=(%23crypticcracking)&src=typed_query"
          target="_blank">#crypticcracking</a
        >
      </p>
      <p>
        Instagram:
        <a
          href="https://www.instagram.com/crackingthecryptic/?hl=en"
          target="_blank">@crypticcracking</a
        > (for how to solve daily clues from The Times)
      </p>
    </Info>
    <Info title="Music" iconUrl="./img/icon/music.svg">
      <p>
        Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata No.
        16 (&ldquo;Sonata Facile&rdquo;)
      </p>
    </Info>
    <Info title="Software" iconUrl="./img/icon/software.svg">
      <p>
        Play the puzzle in the video by clicking the link under the video.
        Thanks to Sam Cappleman-Lynes and Sven Neumann for their work.
      </p>
    </Info>
    <Info title="Logo Design" iconUrl="./img/icon/paint_brush.svg">
      <p>Melvyn Mainini</p>
    </Info>
    <Info title="Opening Credits Design" iconUrl="./img/icon/film.svg">
      <p>Joel Blundell</p>
    </Info>
  </div>
</section>

<section class="contain" id="about">
  <h2>About us</h2>
  <p>
    Hi! We're Simon Anthony and Mark Goodliffe, two of the UK's most
    enthusiastic puzzle solvers. We have both represented the UK at the World
    Sudoku Championships and the World Puzzle Championships. We're also
    &ldquo;cryptic crossword&rdquo; aficionados. Mark is the twelve-time winner
    of The Times championship and Simon is the former record holder for most
    consecutive correct solutions to The Listener crossword. We hope we can help
    your puzzle solving while also introducing you to some of the world's best
    puzzles.
  </p>
</section>

<section class="contain" id="submissions">
  <h2>Guidance for Sudoku/Puzzle Submissions</h2>
  <p>
    If you create a puzzle/sudoku that you'd like to see us solve on Cracking
    The Cryptic then a) FANTASTIC! And b) Please, when sending your submission
    to us, do make sure you adhere to the following requirements. These help our
    testers to get through the sheer volume of requests we receive. Thank you.
  </p>
  <ol>
    <li>
      1. Make sure your puzzle has been test-solved and contains no errors.
    </li>
    <li>
      2. Please indicate in the covering email your preferences as regards your
      puzzle - i.e. are you only looking for it to appear in a video on the
      channel; or, if we decide not to video it but like the puzzle, are you
      happy for us to release it as a community post or on patreon (free or
      behind the paywall)? &ldquo;Use it how you choose&rdquo; covers
      everything!
    </li>
    <li>
      3. Your puzzle email should include: i) the puzzle presented exactly as
      you'd like our testers to see it; ii) on a separate page, the solution.
      The solution should include a description of any difficult/interesting
      steps in the logical path. This is not for Simon & Mark but is to aid the
      testers. We endeavour not to publish puzzles that require
      bifurcation/guesswork so, if a tester feels their only chance to crack a
      difficult puzzle is using such techniques then it is very likely the
      puzzle will be rejected. By including the logic path, the tester may
      appreciate that some logical step WAS reasonable and so still pass the
      puzzle on to Simon & Mark.
    </li>
    <li>
      4. Send the above to: crackingthecryptic@gmail.com Please be aware that we
      do not have time to reply to submissions. You should assume that, if you
      hear nothing and the puzzle has not appeared in a video/community
      post/patreon post within a month then, unfortunately, we have not decided
      to use the puzzle. At this point, by all means do submit another puzzle
      (but please do wait this one month period before doing so).
    </li>
  </ol>
</section>

<section class="contain" id="faq">
  <h2>Frequently Asked Questions</h2>
  <FAQ question="Why haven&apos;t you replied to my email/comment/tweet?"
    ><p>
      We get hundreds of communications daily, and though we try to keep up as
      far as possible with everything sent to us, necessarily we can&apos;t
      reply to everything, and quite a few of the things we are asked are
      recurrent questions. Often your public queries will be answered by our
      helpful viewers directly. For private communications, give us a few weeks
      at least, and check these FAQs and our puzzle submission preferences for
      possible answers.
    </p>
  </FAQ>
  <FAQ
    question="Why does your software sometimes say the solution is right when it&apos;s not?"
  >
    <p>
      The software just checks for repeat digits in rows, columns and boxes. If
      the puzzle has extra constraints, it doesn&apos;t check those.
    </p>
  </FAQ>
  <FAQ
    question="I have found an alternative solution to a puzzle you showed. What&apos;s going on?"
  >
    <p>
      You haven&apos;t. Our solves are rigorously logical and rule out
      alternative solutions. What you have found is a solution that obeys most
      of the rules, but is wrong in some respect, perhaps due to one of the
      constraints. Check it carefully, because our software doesn&apos;t check
      extra constraints (see Q2).
    </p>
  </FAQ>
  <FAQ question="Can we see a video about how to set a sudoku/puzzle? "
    ><p>
      We have made one <a
        href="https://www.youtube.com/watch?v=936S5jWQTYE"
        target="_blank">video</a
      > on setting a Sandwich Sudoku. We&apos;re very happy for the setters we admire
      to concentrate on setting entertaining puzzles for us to solve without necessarily
      recording how they do it, and there may be some aspect of &ldquo;We must not
      let daylight in upon the magic.&rdquo;
    </p>
  </FAQ>
  <FAQ question="Can I send you a puzzle to solve?"
    ><p>
      Definitely. But please see our puzzle <a href="#submissions"
        >submission guidelines
      </a>. They help our testers ensure the video content will be high quality.
      We prefer not to receive crossword submissions at all.
    </p>
  </FAQ>
  <FAQ question="What is the music at the beginning of the videos?"
    ><p>
      It&apos;s by Mozart, and is his Piano Sonata No. 16 in C Major,
      &ldquo;Sonata facile&rdquo; K545.
    </p>
  </FAQ>
  <FAQ
    question="Will you do an eye-tracker on your videos so we can see where you&apos;re looking?"
  >
    <p>
      We&apos;re not familiar with the technology, and don&apos;t think it would
      add much to our explanations of where we&apos;re looking.
    </p>
  </FAQ>
  <FAQ
    question="Why do you charge for your apps when there is so much free sudoku content available?"
  >
    <p>
      On our apps, you can be sure that each puzzle has been crafted for your
      enjoyment, tested and hinted by us, and will help you learn how to solve
      better. Most of the free content out there uses computer-generated
      puzzles, with difficulties based on computer solving, &ldquo;Hints&rdquo;
      in those puzzles will often just provide an extra number, given with no
      logical reason.
    </p>
  </FAQ>
  <FAQ question="Will you be doing more crossword videos?"
    ><p>
      The channel is now mostly about sudoku variants and pencil puzzles. We
      will be doing more cryptic crossword content, but it will probably be on
      Patreon. We&apos;re keeping the channel name, because of the goodwill
      built up with it.
    </p>
  </FAQ>
  <FAQ question="Can&apos;t you improve the production of your videos?"
    ><p>
      We prefer to focus on producing plenty of content that people are tuning
      in for.
    </p>
  </FAQ>
</section>
