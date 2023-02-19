# react-code-ray

![alt](https://i.ibb.co/fYDRyt5/Screenshot-2023-02-20-003900.jpg "Image").

Hi guys! This is my first NPM package, so I hope you will enjoy it.
Other day, I as googling something and I noticed that all code on some of these website are the same, plain boring backgroud with some syntaxt highlighting. So I wrote package that can show you beautiful code, I took design from ray.so and converted it into NPM package. Test it out on: react-code-ray.amelislamovic.tech

## Instalation

```bash
yarn add react-code-ray
```

or

```bash
npm install react-code-ray
```

## Usage

```tsx
import { RayCode } from "react-code-ray";

const code = `const a = 5 + 10;
console.log(a)`;

export default function App() {
  return (
    <div>
        <RayCode code={code} language="ts" >
    </div>
  );
}
```

## Options

| title     | title of code                                      | string |
| --------- | -------------------------------------------------- | ------ |
| language  | language in which code is written                  | string |
| padding   | padding that will be inside of our component       | number |
| code      | code that will actually be inside of our component | string |
| className | className that will be applied to parent element   | string |
