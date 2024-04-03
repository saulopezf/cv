# Minimalist CV - Personal fork

This is a fork from the [BartoszJarocki/cv repo](https://github.com/BartoszJarocki/cv). I made small changes to fit what I want to show in the curriculum and fixed some issues for downloading the CV in PDF.

This fork is not made to merge with the main project, it is for personal use only.

# Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/saulopezf/cv.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local Server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

# Run with Docker

Build the container

```
docker compose build
```

Run the container

```
docker compose up -d
```

Stop the Container

```
docker compose down
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
