
import { splitProps, ComponentProps, JSX } from "solid-js";

function SquareHintAppsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4.05 5.54a2 2 0 011.55-1.5.5.5 0 00.4-.59.5.5 0 00-.66-.38 3 3 0 00-2.29 2.34.5.5 0 00.4.6.5.5 0 00.6-.47zm0 8.92a2 2 0 001.55 1.5.5.5 0 01.4.59.5.5 0 01-.66.38 3 3 0 01-2.29-2.34.5.5 0 01.4-.6.5.5 0 01.6.47zM14.66 3.07a.5.5 0 00-.66.38.5.5 0 00.46.6 2 2 0 011.5 1.55.5.5 0 00.59.4.5.5 0 00.38-.66 3 3 0 00-2.27-2.27zM3 11.5a.5.5 0 001 0v-3a.5.5 0 00-1 0v3zm16-1.75C19 8.78 18.22 8 17.25 8h-2.5C13.78 8 13 8.78 13 9.75V13H9.75C8.78 13 8 13.78 8 14.75v2.5c0 .97.78 1.75 1.75 1.75h6.75a2.5 2.5 0 002.5-2.5V9.75zM14 13V9.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V13h-4zm2.5 5H14v-4h4v2.5c0 .83-.67 1.5-1.5 1.5zm-6.75-4H13v4H9.75a.75.75 0 01-.75-.75v-2.5c0-.41.34-.75.75-.75z"/>
</svg>

  );
}
export default SquareHintAppsIcon;