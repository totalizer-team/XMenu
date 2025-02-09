---
nav:
  title: Components
  order: 1
group:
  title: Other
order: 1
toc: content
mobile: false
---

# File Tree

<code src="./examples/file-tree" compact></code>

## API

### Props

| Name     | Type              | Default            | Description  |
| -------- | ----------------- | ------------------ | ------------ |
| options  | `array<FileItem>` | `[]`               |              |
| value    | `string`          | `""`               | current path |
| onChange | `function`        | `(path, item)=>{}` |              |

### FileItem Props

| Name     | Type     | Default | Description |
| -------- | -------- | ------- | ----------- |
| name     | `string` | `""`    |             |
| children | `array`  | `""`    |             |
