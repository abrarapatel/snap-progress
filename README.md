# Snap Progress

A JavaScript library to display progress or percentages of the current status in a pie chart.

## Installation

Only one JS file is required. Include the following in your HTML file:

```html
<script src="path-to-your-snap-progress.js"></script>

```

## Way to use
```html
<div class="snap-progress" data-snap-value="75" data-snap-stroke-size="15" data-snap-stroke-color="#00ff00" data-snap-background-color="#ddd" data-snap-text-color="#000" data-snap-animation-duration="40" data-snap-radius-style="normal"></div>
```

| Attribute                     | Type      | Default      | Description                                                             |
|-------------------------------|-----------|--------------|-------------------------------------------------------------------------|
| `data-snap-value`             | `number`  | `0`          | The progress value to be displayed (in percentage).                     |
| `data-snap-stroke-size`       | `string`  | `20`         | The thickness of the stroke.                                            |
| `data-snap-stroke-color`      | `string`  | `#ffc400`    | The color of the stroke.                                                |
| `data-snap-background-color`  | `string`  | `#ededed`    | The background color of the progress element.                           |
| `data-snap-base-color`        | `string`  | `#fff`       | The base color of the progress element.                                 |
| `data-snap-text-color`        | `string`  | `#000`       | The color of the text displaying the percentage.                        |
| `data-snap-animation-duration`| `number`  | `0`          | The duration of the animation in milliseconds.                          |
| `data-snap-radius-style`      | `string`  | `normal`     | The style of the radius (`normal`, `square`, `radius-square`, `drum`, `egg-left`, `egg-right`, `random`). |
