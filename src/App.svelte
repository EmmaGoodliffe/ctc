<script lang="ts">
  import Card from "./Card.svelte";
  import Icon from "./Icon.svelte";
</script>

<main class="w-full h-full bg-sky-100 text-sky-900">
  <nav class="flex justify-end px-4">
    <a
      href="#"
      class="px-4 py-2 font-semibold hover:bg-sky-200 transition-all duration-[400ms] rounded mx-4 mt-2 underline underline-offset-1"
      >Home</a
    >
    <a
      href="#"
      class="px-4 py-2 font-semibold hover:bg-sky-200 transition-all duration-[400ms] rounded mx-4 mt-2"
      >FAQs</a
    >
  </nav>
  <div class="w-11/12 mx-auto">
    <h1 class="text-3xl font-semibold mb-6">Cracking the Cryptic</h1>
    <p>
      The PDF of our book is now available! If you backed the <a
        href="https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description"
        >Kickstarter</a
      >, go to the Jellybeangames email receipt, where there is a button to
      download the pdf. Delivery of the physical book should be underway soon.
    </p>

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
    </div>

    <h2>
      <Icon
        url="https://img.icons8.com/ios-filled/24/000000/clothes.png"
        altText="Merchandise"
      />
      Merchandise
    </h2>
    <a href="https://cracking-the-cryptic.creator-spring.com/">bla</a>

    <h2>
      <Icon
        url="https://img.icons8.com/ios-filled/50/000000/discord-logo.png"
        altText="Discord"
      />
      Discord
    </h2>
    <a href="https://discord.gg/BbN89j5">bla</a>

    <h2>
      <Icon
        url="https://img.icons8.com/material/24/000000/patreon.png"
        altText="Patreon"
      />
      Patreon
    </h2>
    <a href="https://www.patreon.com/crackingthecryptic">bla</a>

    <h2>Our Back Catalogue</h2>
    <p>
      <a href="https://tinyurl.com/CTCCatalogue">Catalogue</a> (all categorised with
      links)
    </p>

    <h3>Send us Puzzles to Solve or Contact us</h3>
    <p>crackingthecryptic@gmail.com</p>

    <h3>Follow us</h3>
    <p>
      Twitter: #crypticcracking <a
        href="https://www.instagram.com/crackingthecryptic/?hl=en"
        >@crypticcracking</a
      > Instagram (for how to solve daily clues from The Times)
    </p>

    <h3>Music</h3>
    <p>
      Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata no 16
      ("Sonata Facile")
    </p>

    <h3>Software</h3>
    <p>
      Play the puzzle in the video by clicking the link under the video (above).
      Thanks to Sam Cappleman-Lynes and Sven Neumann for their work.
    </p>

    <h3>Logo Design</h3>
    <p>Melvyn Mainini</p>

    <h3>Opening Credits Design</h3>
    <p>Joel Blundell</p>

    <h3>About us</h3>
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
  </div>
</main>
