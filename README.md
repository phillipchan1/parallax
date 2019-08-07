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
<div class="parallax" style="background: url(myBackgroundImage.png)></div>
```

## Options

You can optionally pass in a configuration option

```
<body>
    <!-- Your content -->
    <script src="parallax.js"></script>
    <script>
        new Parallax({
            speedRatio: 0.5
        });
    </script>
</body>
```

### Options

| Option       |   Type   |                                                                                Description |
| ------------ | :------: | -----------------------------------------------------------------------------------------: |
| `speedRatio` | `number` | A speed modifier to control the speed of the parallax effect. [A number between 0.1 and 1] |
