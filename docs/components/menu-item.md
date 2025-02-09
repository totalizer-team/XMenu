---
group:
  title: Menu
order: 0
toc: content
mobile: false
---

# BaseMenuItem

<code src="./examples/menu-item" ></code>

## Prop `item`

<img style="border:2px solid #ddd;border-radius:8px;" width="400px" src="/props-item.png" />

## API

### Props

| Name | Type         | Default | Description |
| ---- | ------------ | ------- | ----------- |
| item | `<MenuItem>` | `{}`    |             |

### MenuItem Props

| Name       | Type                                                                                                       | Default  | Description |
| ---------- | ---------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| avatar     | `url string`                                                                                               | `""`     |             |
| icon       | `Material Icon`                                                                                            | `null`   |             |
| title      | `string`                                                                                                   | `""`     |             |
| info       | `string`                                                                                                   | `""`     |             |
| secondary  | `string`                                                                                                   | `""`     |             |
| label      | `string`                                                                                                   | `""`     |             |
| labelColor | <div style="max-width:350px">`inherit \|primary \| secondary \| success \| error \| info \| warning`</div> | `""`     |             |
| disabled   | `bool`                                                                                                     | `false`  |             |
| onSelect   | `function`                                                                                                 | `()=>{}` |             |
