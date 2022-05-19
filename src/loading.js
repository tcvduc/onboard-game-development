/**
 * Problem: Loading
 *
 * The result:
 * + The loading bar is full
 * + Loading 100% after 3 seconds
 * + The loading bar load corresponding the 3 seconds
 *
 * Approach:
 * + step 1: display the loading bar 100% - done
 * + step 2: display the loading bar from 0% to 100% - done
 * + step 3: display the loading bar from 0% to 100% corresponding 3 - seconds - done
 * + step 4: display the loading bar from 0% to 100% corresponding 3 seconds, but it
 * work smother each second
 * + step 5:
 * + step 3:
 *
 *
 *
 *
 *
 */

const globalVariables = {
  loadingTime: 3000,
};

async function displayLoadingBarFrom0PercentTo100PercentCorresponding3SecondsSmother() {
  /**
   * - How to make this smoother?
   * + It was not smooth because
   *   + after oneSecond = 1000
   *   + increasePercentBarVariable += 100 / 3
   *
   * - How to fix
   * + The result
   *   + After oneSecond = 1000
   *   the loading bar display 100 / 3
   *   percent
   *   + divide second to millisecond
   *   the millisecond increase from 0
   *   to 1000, display the loading
   *   bar corresponding to this
   *
   * - utils:
   * 1.
   * + width: 0.333%
   * + width: 1.333%
   * + width: 2.333%
   * + width: 3.333%
   * ..
   * + width: 33.333% <=> 100 / 3 %
   *
   * 2.
   * const time = new Date();
   * const second = time.getSeconds();
   * const millisecond = time.getMilliseconds();
   *
   *
   *
   *
   *
   *
   * + step 1: make it smooth from 0% to 100 / 3 % - done
   * + step 2: make it smooth from 0% to 100 / 3 % corresponding 1s
   *
   *
   *
   *
   *
   */

  const percent = document.getElementsByClassName("percent")[0];

  let oneSecond = 1000;

  /**
   * 100 / 3 = 1 / 3 + 1 / 3 + .. (97 times) + 1 / 3
   *
   * + interval time: 1000 = 1 second
   *   + 1 / 3 + 100 times
   *
   *
   * + 1000 <=> 100 times + 1 / 3
   * + 1000
   *   + 100
   *   + 100
   *   .. 10 time 100
   * => 100 <=> 10 times + 1 / 3
   * => 10 <=> 1 times + 1 / 3
   */

  const breakIntervalNumber = Math.floor(100 / 3);

  const date = new Date();
  const startRunSecond = date.getSeconds();

  function promiseIncreaseLoadingBarTo100Slash3Percent() {
    let increasePercentBarVariable = 1 / 3;

    return new Promise(function (resolve) {
      const interval = window.setInterval(() => {
        if (Math.floor(increasePercentBarVariable) === breakIntervalNumber) {
          resolve("Loading Bar was 100 / 3 percent now!");
          window.clearInterval(interval);
        }

        if (increasePercentBarVariable !== 100 / 3) {
          percent.style.width = `${increasePercentBarVariable}%`;
        }
        increasePercentBarVariable = increasePercentBarVariable + 1 / 3;
      }, 10);
    });
  }

  const was100Slash3Percent =
    await promiseIncreaseLoadingBarTo100Slash3Percent();
  console.log("was100Slash3Percent:", was100Slash3Percent);

  const endRunSecond = date.getSeconds();
}

function displayLoadingBarFrom0PercentTo100PercentCorresponding3Seconds() {
  const percent = document.getElementsByClassName("percent")[0];

  let i = 0;
  let increasePercentVariable = 0;

  /**
   * - setInterval(callback,time)
   *   + time: 1000 = 1 second
   *   + time: 2000 = 2 seconds
   *
   * - after time = 1000 the callback will
   * do it stuff
   *
   * - 100% in 3 seconds
   *   + in 1 second <=> 100 / 3 percent
   *
   */

  const increaseLoadingBarPercentInterval = setInterval(() => {
    // if (increasePercentVariable !== 100) {
    //   increasePercentVariable = increasePercentVariable + 100 / 3;
    //   console.log(increasePercentVariable);
    //   percent.style.width = `${increasePercentVariable}%`;
    // }
  }, 1000);

  if (i === 100) {
    window.clearInterval(increaseLoadingBarPercentInterval);
  }
}

function displayLoadingBarFrom0PercentTo100Percent() {
  const percent = document.getElementsByClassName("percent")[0];

  let i = 0;

  const increaseLoadingBarPercent = setInterval(() => {
    if (i !== 100) {
      i++;
      percent.style.width = `${i}%`;
    }
  }, 10);

  if (i === 100) {
    window.clearInterval(increaseLoadingBarPercent);
  }
}

function display100PercentLoadingBar() {
  const percent = document.getElementsByClassName("percent")[0];
  percent.style.width = "100%";
  console.log(percent);
}

function loading() {
  //   display100PercentLoadingBar();
  //   displayLoadingBarFrom0PercentTo100Percent();
  //   displayLoadingBarFrom0PercentTo100PercentCorresponding3Seconds();
  displayLoadingBarFrom0PercentTo100PercentCorresponding3SecondsSmother();
}

loading();
