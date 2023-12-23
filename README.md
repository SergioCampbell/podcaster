![preview](https://i.ibb.co/W2svNhV/podcaster.png)

# Podcaster

Podcaster is a web application where you can search for the top 100 iTunes podcast artists and
hear their content.

Navigate filtering by podcast title or artist name, select the card and check it content.

DEMO HERE: [https://podcaster-delta.vercel.app](https://podcaster-delta.vercel.app)

## Architecture

This project uses a layered architecture, you would have separate layers for presentation (UI components), business logic (services and hooks), and data access (API calls and database operations).

## Tools and Technologies

List the tools and technologies used in your project:

- TypeScript
- Nextjs (14)
- React
- React-query
- React-table
- Jest
- linkify-react
- Eslint

## Project Structure

Overview of the project structure:

```
└── 📁podcast
    └── .eslintrc.json
    └── 📁.swc
        └── 📁plugins
            ├── v7_windows_x86_64_0.104.30
    └── 📁db
        └── allPodcast.ts
        └── data.ts
    └── jest.config.ts
    └── jest.setup.ts
    └── next-env.d.ts
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── 📁public
        └── next.svg
        └── vercel.svg
    └── README.md
    └── 📁src
        └── 📁app
            └── favicon.ico
            └── globals.css
            └── HomePage.tsx
            └── page.module.css
            └── page.tsx
            └── 📁podcast
                └── 📁[podcastId]
                    └── 📁episode
                        └── 📁[episodeId]
                            └── page.tsx
                    └── page.tsx
            └── Providers.tsx
        └── 📁components
            └── ErrorComponent.tsx
            └── Loading.tsx
            └── navbar.tsx
            └── 📁Podcast
                └── DummyData.ts
                └── Filter.tsx
                └── PodcastCards.tsx
                └── PodcastTable.tsx
            └── Sidebar.tsx
        └── 📁hooks
            └── index.ts
            └── 📁useQuery
                └── usePodcast.ts
                └── useQueryconfig.ts
        └── 📁interface
            └── podcastDetail.ts
            └── podcasts.ts
        └── 📁libs
            └── apiUrl.ts
            └── constans.ts
            └── defaultValues.ts
        └── 📁services
            └── serviceFetcher.ts
    └── tsconfig.json
    └── 📁__test__
        └── filter.test.tsx
        └── navbar.test.tsx
        └── podcast.test.tsx
        └── podcastCard.test.tsx
        └── sidebar.test.tsx
        └── 📁__snapshots__
            └── podcastCard.test.tsx.snap
```

## Installation

- Clone the project
- execute ```npm install``` or ```yarn```
- Run ```npm run dev``` or ```yarn dev```

## Usage

Once in "dev mode" open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
To edit some values and add "dynamicity" go to the this path:

```
└── HomePage.tsx
```

and in the

usePodcast hook

 ````
   const { data, isFetching, isLoading } = usePodcast(100); // this number is variable
````

### Dev mode

if you want to made some changes in dev evironment, go to ```next.config.js``` and add the follow pathern:

```
//next.config.js
    ...
        {
          key: "Access-Control-Allow-Origin",
          value: isLocal ? localEnv : prodEnv,
        },
    ...
```

## Testing

This project uses [Jest](https://jestjs.io) and to run the test just excecute the follow script:

- ```npm run test``` or ```yarn test```

## License

MIT
