
import { splitProps, ComponentProps, JSX } from "solid-js";

function DocumentBriefcaseIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2a2 2 0 00-2 2v5h1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-2v1h2a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM4 10.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h1a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3c0-1.1.9-2 2-2h1v-1.5zm3 .5H5v1h2v-1zm-4 2a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1H3z"/>
</svg>

  );
}
export default DocumentBriefcaseIcon;