# READING LIST FRONTEND

## My motivation

Throughout the day, I read a lot of material. Sometimes, at work, I don't have time to read it immediately. Therefore, I thought it would be beneficial to have an app that allows sharing articles between various devices. This is the frontend component of the app.

I have no prior experience with Svelte, previously I was making some apps in React,
so this is something totaly new to me.

## Getting Started

Before running the app, you need to create a `.env` file. You can copy the example file and fill in the values:

```bash
$ cp .env.example .env
```

## Running the app

Then you can run the app with the following commands:

```bash
#build
$ make dev-build
#start
$ make dev-start
```

## Stop

```bash
# stop
$ make dev-down
```

### All ENV list ###

| Variable            | Description                  | Type     | Required | Default |
|---------------------|------------------------------|----------|----------|---------|
| `VITE_API_URL`      | The API address.             | `string` | true     | -       |
| `VITE_FRONTEND_PORT`| The port frontend will use.  | `number` | true     | -       |
