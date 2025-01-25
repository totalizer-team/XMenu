---
group:
  title: components
order: 0
toc: content
mobile: false
---

# BaseMenuList

<code src="./examples/menu-list" ></code>

### Prop `c`

<img style="border:2px solid #ddd;border-radius:8px;" width="400px" src="/props-c.png" />

## API

### Props

| Name       | Type              | Default  | Description |
| ---------- | ----------------- | -------- | ----------- |
| options    | `array<MenuItem>` | `[]`     |             |
| isSelected | `function`        | `()=>{}` |             |
| onClick    | `function`        | `()=>{}` |             |

### MenuItem Props

| Name | Type                              | Default   | Description |
| ---- | --------------------------------- | --------- | ----------- |
| c    | `DEFAULT` \| `Title` \| `Divider` | `DEFAULT` |             |

#### `DEFAULT`

View Detailed API Configuration , [BaseMenuItem](./menu-item)

#### `Title`

| Name  | Type     | Default | Description |
| ----- | -------- | ------- | ----------- |
| title | `string` | `""`    |             |

#### `Divider`

No properties.
