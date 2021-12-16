<script lang="ts">
  import Card from "./Card.svelte";
  import Info from "./Info.svelte";
  import Nav from "./Nav.svelte";
</script>

<Nav />
<main class="w-11/12 mx-auto">
  <h1>Cracking the Cryptic</h1>
  <p>
    The PDF of our book is now available! If you backed the <a
      href="https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description"
      >Kickstarter</a
    >, go to the Jellybeangames email receipt, where there is a button to
    download the pdf. Delivery of the physical book should be underway soon.
  </p>

  <section
    class="flex flex-col content-center md:flex-row md:justify-around flex-wrap xl:w-2/3 mx-auto"
    id="apps"
  >
    <Card
      title="Sudoku Pad"
      isNew={true}
      windowsUrl="https://store.steampowered.com/app/1706870/Svens_SudokuPad/"
      appleUrl="https://apps.apple.com/us/app/svens-sudokupad/id1570622073"
      androidUrl="https://play.google.com/store/apps/details?id=com.svencodes.sudokupad"
    >
      <p>Search for "SudokuPad" on Amazon</p>
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
  </section>

  <section id="info">
    <Info
      title="Merchandise"
      url="https://cracking-the-cryptic.creator-spring.com/"
      iconUrl="https://img.icons8.com/ios-filled/24/000000/clothes.png"
    >
      <p>Our merchandise (including birthday merch)</p>
    </Info>

    <Info
      title="Discord"
      url="https://discord.gg/BbN89j"
      iconUrl="https://img.icons8.com/ios-filled/50/000000/discord-logo.png"
    >
      <p>CTC fan Discord server</p>
    </Info>

    <Info
      title="Patreon"
      url="https://www.patreon.com/crackingthecryptic"
      iconUrl="https://img.icons8.com/material/24/000000/patreon.png"
    >
      <p>Join the community, support us and try our puzzle hunts</p>
    </Info>

    <Info
      title="Catalogue"
      url="https://tinyurl.com/CTCCatalogue"
      iconUrl="https://img.icons8.com/ios-filled/50/000000/summary-list.png"
      ><p>Our back catalogue (all categorised with links)</p>
    </Info>

    <Info
      title="Email"
      iconUrl="https://img.icons8.com/ios-filled/50/000000/email-open.png"
    >
      <p>
        Send us puzzles to solve or contact us: <a
          href="mailto:crackingthecryptic@gmail.com"
          >crackingthecryptic@gmail.com</a
        >
      </p>
    </Info>

    <Info
      title="Follow us"
      iconUrl="https://img.icons8.com/ios-filled/30/000000/twitter.png"
    >
      <p>
        Twitter:
        <a href="https://twitter.com/crypticcracking">@crypticcracking</a>
        <a
          href="https://twitter.com/search?q=(%23crypticcracking)&src=typed_query"
          >#crypticcracking</a
        >
      </p>
      <p>
        Instagram:
        <a href="https://www.instagram.com/crackingthecryptic/?hl=en"
          >@crypticcracking</a
        > (for how to solve daily clues from The Times)
      </p>
    </Info>

    <Info
      title="Music"
      iconUrl="https://img.icons8.com/ios-filled/30/000000/musical-notes.png"
    >
      <p>
        Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata no 16
        ("Sonata Facile")
      </p>
    </Info>

    <Info
      title="Software"
      iconUrl="https://img.icons8.com/ios-glyphs/30/000000/web.png"
    >
      <p>
        Play the puzzle in the video by clicking the link under the video
        (above). Thanks to Sam Cappleman-Lynes and Sven Neumann for their work.
      </p>
    </Info>

    <Info
      title="Logo Design"
      iconUrl="https://img.icons8.com/ios-filled/30/000000/design--v1.png"
    >
      <p>Melvyn Mainini</p>
    </Info>

    <Info
      title="Opening Credits Design"
      iconUrl="https://img.icons8.com/ios-filled/30/000000/movie.png"
    >
      <p>Joel Blundell</p>
    </Info>
  </section>

  <section id="about">
    <h2>About us</h2>
    <p>
      Hi! We're Simon Anthony and Mark Goodliffe, two of the UK's most
      enthusiastic puzzle solvers. We have both represented the UK at the World
      Sudoku Championships and the World Puzzle Championships. We're also
      "cryptic crossword" aficionados. Mark is the twelve-time winner of The
      Times championship and Simon is the former record holder for most
      consecutive correct solutions to The Listener crossword. We hope we can
      help your puzzle solving while also introducing you to some of the world's
      best puzzles.
    </p>
  </section>

  <section id="submissions">
    <h3>Guidance for Sudoku/Puzzle Submissions</h3>
    <p>
      If you create a puzzle/sudoku that you'd like to see us solve on Cracking
      The Cryptic then a) FANTASTIC! And b) Please, when sending your submission
      to us, do make sure you adhere to the following requirements. These help
      our testers to get through the sheer volume of requests we receive. Thank
      you.
    </p>
    <p>1. Make sure your puzzle has been test-solved and contains no errors.</p>
    <p>
      2. Please indicate in the covering email your preferences as regards your
      puzzle - i.e. are you only looking for it to appear in a video on the
      channel; or, if we decide not to video it but like the puzzle, are you
      happy for us to release it as a community post or on patreon (free or
      behind the paywall)? “Use it how you choose” covers everything!
    </p>
    <p>
      3. Your puzzle email should include: i) the puzzle presented exactly as
      you'd like our testers to see it; ii) on a separate page, the solution.
      The solution should include a description of any difficult/interesting
      steps in the logical path. [This is not for Simon & Mark but is to aid the
      testers. We endeavour not to publish puzzles that require
      bifurcation/guesswork so, if a tester feels their only chance to crack a
      difficult puzzle is using such techniques then it is very likely the
      puzzle will be rejected. By including the logic path, the tester may
      appreciate that some logical step WAS reasonable and so still pass the
      puzzle on to Simon & Mark.
    </p>
    <p>
      4. Send the above to: crackingthecryptic@gmail.com Please be aware that we
      do not have time to reply to submissions. You should assume that, if you
      hear nothing and the puzzle has not appeared in a video/community
      post/patreon post within a month then, unfortunately, we have not decided
      to use the puzzle. At this point, by all means do submit another puzzle
      (but please do wait this one month period before doing so).
    </p>
  </section>

  <section id="faq">
    <h2>FAQs</h2>
  </section>
</main>
