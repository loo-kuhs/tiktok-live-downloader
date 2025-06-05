# TikTok Live Stream Downloader

This is a refactored version of [tiktok-live](https://github.com/Pauloo27/tiktok-live) by [Pauloo27](https://github.com/Pauloo27).

## Project Status

This project is currently in development. Before open a issue, please read all the requirements, installation and usage section.

> ![GitHub top language](https://img.shields.io/github/languages/top/loo-kuhs/tiktok-live-downloader?style=for-the-badge)
> ![GitHub last commit](https://img.shields.io/github/last-commit/loo-kuhs/tiktok-live-downloader?style=for-the-badge)
> ![GitHub repo size](https://img.shields.io/github/repo-size/loo-kuhs/tiktok-live-downloader?style=for-the-badge)
> ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/loo-kuhs/tiktok-live-downloader?style=for-the-badge)

## ☕ Support Me on Ko-fi

Found this tool helpful? That’s awesome — I’m glad it helped!  
If you'd like to support future updates or just say thanks, you can optionally buy me a coffee:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A81ENILS)

## Installation

### Requirements

This project requires ffmpeg to be installed on your system. You can download it from [here](https://ffmpeg.org/download.html).

This project uses native fetch, so you need to have Node.js 18.0.0 or higher installed on your system. You can download it from [here](https://nodejs.org/en/download/).

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
npm run esbuild
```

Run the project:

```bash
node build/cli.js <username> --output <output> --format <format>
# or
node build/cli.js <username> -o <output> -f <format>
# or
node build/cli.js <username> -o <output>
# or
node build/cli.js <username> -f <format>
# e.g.
node build/cli.js mrbeast --output mydownloads --format mp4
```

> **Note:** Last tested into Windows 11 with Node.js 22.14.0, npm 11.4.0 and ffmpeg 7.1.1-full_build.

## Open Issues

Before open a issue, please read all the requirements, installation and usage section.
If you have any questions, please open a issue answering the following questions:

- What is the problem? (Please describe and provide logs and/or screenshots)
- What version of Node.js and npm are you using?
- What operating system are you using?
- Are you using the latest version of the project?
- Did you follow all the requirements, installation and usage section?
- Did you try to run the project on another operating system/environment?

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks to [Pauloo27](https://github.com/Pauloo27) for the original project code base.
