# TikTok Live Stream Downloader

This is a refactored version of [tiktok-live](https://github.com/Pauloo27/tiktok-live) by [Pauloo27](https://github.com/Pauloo27).

## Project Status

This project is currently in development. It is not yet ready for production.

> Ongoing
>
> ![GitHub top language](https://img.shields.io/github/languages/top/loo-kuhs/tiktok-live-downloader?style=for-the-badge)
> ![GitHub last commit](https://img.shields.io/github/last-commit/loo-kuhs/tiktok-live-downloader?style=for-the-badge)
> ![GitHub repo size](https://img.shields.io/github/repo-size/loo-kuhs/tiktok-live-downloader?style=for-the-badge)
> ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/loo-kuhs/tiktok-live-downloader?style=for-the-badge)

## Installation

### Requirements

This project requires ffmpeg to be installed on your system. You can download it from [here](https://ffmpeg.org/download.html).

This project also requires Node.js to be installed on your system. You can download it from [here](https://nodejs.org/en/download/).

**Install ffmpeg on Windows:**
  
  ```bash
  choco install ffmpeg-full
  # or
  scoop install ffmpeg
  # or
  winget install ffmpeg
  ```

**Install ffmpeg on Linux:**
  
  ```bash
  sudo apt install ffmpeg
  ```

**Install ffmpeg on MacOS:**
  
  ```bash
  brew install ffmpeg
  ```

## Usage

Clone the repository:

```bash
git clone https://github.com/loo-kuhs/tiktok-live-downloader.git
```

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Run the project:

```bash
node build/app.js <username> --output <output> --format <format>
# or
node build/app.js <username> -o <output> -f <format>
# or
node build/app.js <username> -o <output>
# or
node build/app.js <username> -f <format>
# e.g.
npm build/app.js mrbeast --output ./mydownloads --format mp4
```

## TODO

- [ ] Add support for flv url extraction
- [ ] Simplify the ffmpeg console output

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks to [Pauloo27](https://github.com/Pauloo27) for the original project code base.
