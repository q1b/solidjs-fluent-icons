
import { splitProps, ComponentProps, JSX } from "solid-js";

function MathFormatLinearIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.36 3.65a.5.5 0 00-.71 0l-1.5 1.5a.5.5 0 00.7.7L9 4.72l1.15 1.15a.5.5 0 10.7-.71l-1.5-1.5zM7.74 7.78a1.79 1.79 0 00-1.27-.75 3.26 3.26 0 00-1.74.24c-1.24.52-2.45 1.78-3.06 4.06a3.7 3.7 0 00.14 2.6c.35.72.96 1.2 1.67 1.42 1.42.45 3.21-.12 4.42-1.73a.5.5 0 00-.8-.6c-1 1.33-2.37 1.68-3.32 1.38a1.74 1.74 0 01-1.07-.9 2.48 2.48 0 01-.16-1.51c2.16.12 3.64-.47 4.51-1.32.9-.87 1.18-2.1.68-2.89zM6.36 9.95c-.6.59-1.71 1.1-3.55 1.05.58-1.64 1.5-2.47 2.3-2.8.46-.2.88-.23 1.2-.18.34.05.52.19.58.29.16.26.17.96-.53 1.64zm11.5-2.8c.19.2.19.5 0 .7l-3.09 3.08 1.64 2.76c.07.1.25.25.47.3.17.03.42.02.74-.35a.5.5 0 11.76.66c-.53.6-1.15.78-1.7.67-.51-.1-.9-.44-1.1-.72-.12-.18-.8-1.34-1.54-2.59l-3.19 3.2a.5.5 0 01-.7-.71l3.37-3.38a981.7 981.7 0 01-1.46-2.5.59.59 0 00-.41-.27c-.15-.01-.42.02-.75.47a.5.5 0 01-.8-.59c.49-.67 1.08-.94 1.66-.87.54.06.96.4 1.16.75l1.33 2.28 2.9-2.9c.2-.19.5-.19.7 0z"/>
</svg>

  );
}
export default MathFormatLinearIcon;