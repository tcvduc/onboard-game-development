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
 * work smother 1 second - done
 * + step 5: display the loading bar from 0% to 100% corresponding 3 seconds
 * work smother 2 second
 * + step 6: display the loading bar from 0% to 100% corresponding 3 seconds
 * work smother 3 second
 * + step 7:
 *
 *
 *
 *
 *
 */

const globalVariables = {
  loadingTime: 3000,
};

/**
 *
 * @param {number} percent
 */
function displayPercentCorrespondingLoadingBar(percent) {
  const loadingPercent = document.getElementById("loadingPercent");
  loadingPercent.innerHTML = `${percent}%`;
}

async function displayLoadingBarFrom0PercentTo100PercentCorresponding2SecondsSmother() {
  /**
   * - The result
   * + 2 seconds <=> 200 / 3 percent loading bar
   * + 2 seconds <=> 2000 interval time
   *
   * - Analyze
   * + 200 / 3 = 1 / 3 + 1 / 3 + .. (197 times)  + 1 / 3
   * + 2 seconds <=> 2000 interval time
   *   + 1 seconds <=> 1000 interval time
   *   + 1 seconds <=> 1000 interval time
   * + 2 seconds <=> 200 / 3 percent loading bar
   *   + 1 seconds <=> 100 / 3 percent loading bar
   *     + 1000 interval time <=> 100 / 3 percent loading bar
   *       + 10 interval time <=> 1 / 3 percent loading bar
   *   + 1 seconds <=> 100 / 3 percent loading bar
   *     + 1000 interval time <=> 100 / 3 percent loading bar
   *       + 10 interval time <=> 1 / 3 percent loading bar
   * + break condition:
   *   + time: 2 seconds
   *   + percent: 200 / 3 ~ 66
   *
   * -- -----------------------------------------------
   *     10   interval time <=> 1 / 3 percent loading bar
   * <=> 1000 interval time <=> 100 / 3 percent loading bar
   * <=> 2000 interval time <=> 200 / 3 percent loading bar
   *
   *     10   interval time <=> 1 / 3 percent loading bar
   * <=> 20   interval time <=> 2 / 3 percent loading bar
   * <=> 2000 interval time <=> 200 / 3 percent loading bar
   *
   *
   *
   *
   *
   */
  const percent = document.getElementsByClassName("percent")[0];
  const startRunSecond = new Date().getSeconds();
  const breakIntervalNumber = Math.floor(200 / 3);
  console.log("startRunSecond: ", startRunSecond);
  /**
   *
   * @param {HTMLDivElement} percent
   */
  function promiseIncreaseLoadingBarTwoSeconds(percent) {
    const loadingPercent = document.getElementById("loadingPercent");
    let increasePercentVariable = 0;
    return new Promise(function (resolve) {
      const interval = window.setInterval(function () {
        if (Math.floor(increasePercentVariable) === breakIntervalNumber) {
          resolve(increasePercentVariable);
          window.clearInterval(interval);
        }
        percent.style.width = `${increasePercentVariable}%`;
        const loadingPercentFixedTwo = increasePercentVariable.toFixed(2);
        const loadingPercentFixedTwoString = loadingPercentFixedTwo.toString();
        if (
          loadingPercentFixedTwoString[
            loadingPercentFixedTwoString.length - 1
          ] === "0" &&
          loadingPercentFixedTwoString[
            loadingPercentFixedTwoString.length - 1 - 1
          ] === "0"
        ) {
          loadingPercent.innerHTML = `${increasePercentVariable.toFixed(0)}%`;
        } else {
          loadingPercent.innerHTML = `${increasePercentVariable.toFixed(2)}%`;
        }
        increasePercentVariable = increasePercentVariable + 2 / 3;
      }, 20);
    });
  }

  await promiseIncreaseLoadingBarTwoSeconds(percent);

  const endRunSecond = new Date().getSeconds();
  console.log("endRunSecond: ", endRunSecond);

  const actualRunTime = endRunSecond - startRunSecond;
  console.log("actualRunTime: ", actualRunTime);
}

async function displayLoadingBarFrom0PercentTo100PercentCorresponding1SecondsSmother() {
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
   * 3. interval
   * window.setInterval(function(){
   *  // do something
   * },1000)
   *
   * 4. promise
   * function promiseInterval(){
   *  return new Promise(function(resolve){
   *      window.setInterval(function(){
   *          // do something
   *          resolve(1);
   *      },1000)
   *
   *  })
   * }
   *
   *
   *
   *
   *
   * + step 1: make it smooth from 0% to 100 / 3 % - done
   * + step 2: make it smooth from 0% to 100 / 3 % corresponding 1s - done
   *
   *
   *
   *
   *
   */

  const percent = document.getElementsByClassName("percent")[0];

  /**
   * Analyze
   *
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
   *
   * => do stuff in 1 second code
   *
   *
   *
   */

  const breakIntervalNumber = Math.floor(100 / 3);

  const startRunSecond = new Date().getSeconds();
  console.log("startRunSecond: ", startRunSecond);

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
          const displayPercentNumberWithTwoFixed =
            increasePercentBarVariable.toFixed(2);
          displayPercentCorrespondingLoadingBar(
            displayPercentNumberWithTwoFixed
          );
        }
        increasePercentBarVariable = increasePercentBarVariable + 1 / 3;
      }, 10);
    });
  }

  const was100Slash3Percent =
    await promiseIncreaseLoadingBarTo100Slash3Percent();
  const endRunSecond = new Date().getSeconds();
  console.log("endRunSecond: ", endRunSecond);

  console.log("Actual run time : ", endRunSecond - startRunSecond);
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
  // displayLoadingBarFrom0PercentTo100PercentCorresponding1SecondsSmother();
  displayLoadingBarFrom0PercentTo100PercentCorresponding2SecondsSmother();
}

loading();
