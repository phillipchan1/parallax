# Hero Parallax

A cross-browser pure Javascript parallax plugin

## Usage

1. Import it in

```
<body>
    <!-- Your content -->
    <script src="parallax.js"></script>
    <script>
        new Parallax();
    </script>
</body>
```

2. Tag sections where you want the parallax effect with the class `.parallax`

```
<div class="wrapper>
    <div
        class="parallax"
        data-parallax-background="https://images.unsplash.com/photo-1586204947495-462c218f5f05?ixlib=rb-1.2.1&auto=format&fit=crop&w=2434&q=80"
        data-parallax-height="100vh"
      >
      Some content in here
    </div>
</div>
```

## Options

You can optionally pass in a configuration option

```
<body>
    <!-- Your content -->


    <script src="parallax.js"></script>
    <script>
        new Parallax({
            speedRatio: 1
        });
    </script>
</body>
```

### Options

Options Per Parallax Section (passed into each `.parallax` div)

| Option                     | Required | Description                                                        |
| -------------------------- | -------: | ------------------------------------------------------------------ |
| `data-parallax-background` |      yes | The url of the background image for the parallax section           |
| `data-parallax-height`     |      yes | The height of the parallax section (any valid css height property) |

Global Options (passed into the `new Parallax()`)
| Option | Type | Default | Description |
| ------------| :--------: | :--------: | ----------: |
| `debugMode` | `boolean` | `false` | Whether to show debug statements in the log |
| `defaultHeight` | `string` | `70vh` | Fallback height of parallax element if one is not provided (any valid css height property) |
| `speed` | `number` | 1 | A speed modifier to control the speed of the parallax effect. [A number between 1 and 10] |
| `parallaxClassName` | `string` | `.parallax` | The class selector to use to target parallax elements |
| `wrapperClassName` | `string` | `.wrapper` | The class selector to use to target parallax elements |
