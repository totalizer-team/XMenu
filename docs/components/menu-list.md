---
order: 0
toc: content
mobile: false
---

# Base Menu List

## Demo

<code src="./examples/menu-list" ></code>

## API

### Props

| Name       | Type              | Default  | Description |
| ---------- | ----------------- | -------- | ----------- |
| options    | `array<MenuItem>` | `[]`     |             |
| isSelected | `function`        | `()=>{}` |             |
| onClick    | `function`        | `()=>{}` |             |

### MenuItem Props

c: `DEFAULT` | `Title` | `Divider`

#### DEFAULT

| Name       | Type                                                                    | Default  | Description |
| ---------- | ----------------------------------------------------------------------- | -------- | ----------- |
| avatar     | `url string`                                                            | `""`     |             |
| icon       | `Material Icon`                                                         | `null`   |             |
| title      | `string`                                                                | `""`     |             |
| info       | `string`                                                                | `""`     |             |
| secondary  | `string`                                                                | `""`     |             |
| label      | `string`                                                                | `""`     |             |
| labelColor | `inherit \|primary \| secondary \| success \| error \| info \| warning` | `""`     |             |
| disabled   | `bool`                                                                  | `false`  |             |
| onClick    | `function`                                                              | `()=>{}` |             |

#### Title

| Name  | Type     | Default | Description |
| ----- | -------- | ------- | ----------- |
| title | `string` | `""`    |             |

#### Divider

No properties.
