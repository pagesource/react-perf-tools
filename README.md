# TO-DO App

This is a TO-DO app build with react, styled with sass and provides audit for Performance, Accessibility<br />
SEO, Best-practices with Google's Lighthouse CLI integration.<br />
This app also provides budgeting with size-limit integration of 1.5 s of threshold. Bundle can be analyze<br />
by source-map-explorer.

## Features

This TO-DO react app provides integration with lighthouse and report for audits based on various categories.<br />
Reports are provided in .json, .html format.

## App Capabilities
1) Add a task
2) See the list - pending, completed tasks
3) Mark your pending tasks completed
4) removed the completed tasks

### State Management
App state is managed with useReducer hook, a custom hook is built using useReducer<br/> to manage state at single point
and provides dispatch actions for performing various updates to state.

### Styling
Resets and variables are created under styles folder.

## Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Lighthouse

Config for lighthouse can be found under lighthouse/config/config.js<br />
reports can be found under lighthouse/reports/----<br />
    1. initial.(all) -> these were the reports generated initially

## Scripts

### `yarn run lighthouse`
Runs the lighthouse script<br />
and opens the report in browser.

### Script Explanation

"lighthouse http://localhost:5000 --config-path=./lighthouse/config/config.js --output json --output html --output-path ./lighthouse/reports/initial --quiet --view --chrome-flags=--headless"

### url

http://localhost:5000 - url on which we need to see the metrics.

#### input
Configuration
`--config-path=./lighthouse/config/config.js` -> Default config can be found here

#### output
--output json --output html --output-path ./lighthouse/reports/initial ->

`--output json --output html` -> generates report in json and html format<br />
`--output-path` -> generates report at the path specific

`--quiet` -> 
If you want the report to run silently you can use the following argument<br />

`--view` -> 
With the “view” argument, your report opens in a chrome window once after it has finished running<br />

`--chrome-flags=--headless` -> 
If you don’t want the Chrome browser pop-up to open we need to provide this argument<br />

`--extra-headers=./lighthouse/config/custom-headers.json` -> 
At times, there are some custom headers that are required to be send in http request, these<br />
can be override by this argument<br />

# Build Analyzer

`source-map-explorer` is used as a bundle analyzer as it shows tree map visualization.

## Why source-map-explorer?

Analyze and debug JavaScript code through source maps.

### Scripts

#### `yarn run analyze`
Runs the analyze script<br />
and opens the tree map in browser.

# Size Limit

`size-limit` to budget the app.

### Scripts

#### `yarn run size`
Runs the analyze script<br />
and shows report as below for pass & fail respectively.

##### Success

```
    Time limit:   1.5 s
    Size:         43.4 KB
    Loading time: 868 ms  on slow 3G
    Running time: 446 ms  on Snapdragon 410
    Total time:   1.4 s
```
  

##### Error

```
    Total time limit has exceeded
    Time limit:   1 s
    Size:         43.4 KB
    Loading time: 868 ms  on slow 3G
    Running time: 398 ms  on Snapdragon 410
    Total time:   1.3 s
```
  

## References

| Type | Description  | URL  |
| ------- | --- | --- |
| Lighthouse Developer API | This is an API reference for Lighthouse. | [Google Docs](https://developers.google.com/web/tools/lighthouse)|
| Lighthouse CLI Configuration | Configurations explained for Lighthouse CLI. | [Repo's README.md File](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md)  |
| Lighthouse Code repo | GIT repo link to Lighthouse. | [Github Repo](https://github.com/GoogleChrome/lighthouse)|
| Lighthouse Scoring & Terms Explained | Docs link which can explain insights about how scores are calculated. | [Repo's README.md File](https://github.com/GoogleChrome/lighthouse/blob/d2ec9ffbb21de9ad1a0f86ed24575eda32c796f0/docs/scoring.md#how-are-the-scores-weighted)|
| Chrome Flags | List of Chromium Command Line Switches --headless used at the top. | [Link to refer Chrome Flags](http://peter.sh/experiments/chromium-command-line-switches/)|
| source-map-explorer | details about the package, scripts & arguments to refer. | [Link to refer NPM package](https://www.npmjs.com/package/source-map-explorer)|
