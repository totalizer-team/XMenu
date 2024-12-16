---
nav:
  title: components
  order: 0
order: 1
toc: content
mobile: false
---


# Action Menu

> A component that displays a menu with a list of actionable items or options. It allows users to perform specific actions, such as editing, deleting, or sharing, typically through a dropdown interface. Commonly used in toolbars, context menus, or as part of a button group.


Component Name: `XActionMenu`

Import: 

``` js
import XNavigation from '@totalizer/xcomponents/XActionMenu';
```

## Demo

<code src="./examples/action-menu" ></code>

## Usage

``` js
<XActionMenu
  options={options}
  placement="bottom"
  onClick={(item) => {
    console.log(item);
  }}
>
  <IconButton>
    <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
  </IconButton>
</XActionMenu>
```

## API

### Props

| Name      | Type                                                                  | Default  | Description |
| --------- | --------------------------------------------------------------------- | -------- | ----------- |
| options   | `array<MenuItem>`                                                     | `[]`     |             |
| arrow     | `bool`                                                                | `true`   |             |
| width     | `Number \| String`                                                    | `auto`   |             |
| placement | `top-start \| top \| top-end \| bottom-start \| bottom \| bottom-end` | `bottom` |             |
| onClick   | `function`                                                            | `()=>{}` |             |

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