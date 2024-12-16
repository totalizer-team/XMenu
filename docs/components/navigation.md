---
order: 2
toc: content
mobile: false
---


# Navigation

> A component that facilitates navigation within an application or website. It serves as a structured interface to help users move between different pages, sections, or features. Commonly used in headers, sidebars, or footers to enhance user experience and accessibility.

Component Name: `XNavigation`

Import: 

``` js
import XNavigation from '@totalizer/xcomponents/XNavigation';
```


## Demo

### Horizontal

<code src="./examples/navigation-horizontal" ></code>


### Vertical

<code src="./examples/navigation-vertical"></code>

### Sidebar

<code src="./examples/navigation-sidebar"></code>


## Usage


``` js
export default () => {
  const [path, setPath] = React.useState('/Account');

  return <XNavigation
    variant="horizontal"
    options={config}
    isSelected={(item) => item.path === path}
    onClick={(item) => {
      if (item.path) setPath(item.path);
    }}
  />;
};

```


## API

### Props

| Name       | Type                                | Default   | Description |
| ---------- | ----------------------------------- | --------- | ----------- |
| variant    | `vertical \| horizontal \| sidebar` | `vertica` |             |
| options    | `array<NavItem>`                    | `[]`      |             |
| isSelected | `function`                          | `()=>{}`  |             |
| onClick    | `function`                          | `()=>{}`  |             |

### NavItem Props

| Name       | Type                                                                    | Default  | Description |
| ---------- | ----------------------------------------------------------------------- | -------- | ----------- |
| icon       | `Material Icon`                                                         | `null`   |             |
| title      | `string`                                                                | `""`     |             |
| info       | `string`                                                                | `""`     |             |
| secondary  | `string`                                                                | `""`     |             |
| label      | `string`                                                                | `""`     |             |
| labelColor | `inherit \|primary \| secondary \| success \| error \| info \| warning` | `""`     |             |
| disabled   | `bool`                                                                  | `false`  |             |
| onClick    | `function`                                                              | `()=>{}` |             |
