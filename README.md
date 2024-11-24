# Audio Compress Bun 

This is a simple program that compresses an audio file using ffmpeg.

## Usage

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts <input file> <level>
```

Level is an integer between 0 and 9, with 0 being the highest compression and 9 being the lowest.

The recommended level is 2, which is the default.

The output file will have the same name as the input file, but with "_compressed" appended to it's name.

```


