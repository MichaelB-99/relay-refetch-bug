# Relay TodoMVC Bug Reproduction

# Bug description
When calling refetch from a refetchable/pagination fragment on a type that implements the node interface, the id won't be passed to the node query resulting in a failed query.
This can be worked around by passing the id explicitly to the refetch fn.

![relay-bug-refetch](https://github.com/MichaelB-99/relay-refetch-bug/assets/54602790/8f65b11e-15ad-45fe-b821-db128bc227fa)

## Installation

```
yarn
```

## Running

Set up generated files:

```
yarn update-schema
yarn build
```

Start a local server:

```
yarn start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.graphql`, and restart the server:

```
yarn update-schema
yarn build
yarn start
```
