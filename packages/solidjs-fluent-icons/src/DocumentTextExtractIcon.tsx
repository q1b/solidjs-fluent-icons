
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentTextExtractIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2a2 2 0 00-2 2v7h1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-2H4v2c0 1.1.9 2 2 2h8a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zm-8.3 3a.5.5 0 000 1h7a.5.5 0 000-1h-7zm-4 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zm4 2a.5.5 0 000 1h7a.5.5 0 000-1h-7z"/>
</svg>

  );
}
export default DocumentTextExtractIcon;