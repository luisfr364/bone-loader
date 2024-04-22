# Bone Loader

bone loader is a simple package that allows you to build loading custom loading animations for
your react elements without having to worry about coding css animations and other stuff.

## Elements

There are three types of elements in this library

- GenericLoadEl
- LoadingLine
- LoadingLines

Each one can have their propetied modified by passing css values via props.

## GenericLoadingEl

This is a component made to be fully customizable in case you want an element with a different shape, like a circle or even a triangle.

For the time being these are the properties that can be customized via props:

- $width
- $height
- $margin
- $borderRadius
- $clipPath

## LoadingLine

As the name says it's a component that allows you to place a single line with a loading animation.

- $width
- $height
- $margin
- $borderRadius
- $clipPath

## LoadingLines

This is wrapper class for the LoadingLine elements that lets you place multiple lines with a single element by passing the values of lines to be rendered via props, the default number is just one.
