
import { splitProps, ComponentProps, JSX } from "solid-js";

function HdrIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.75 4A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.5A2.75 2.75 0 0018 13.25v-6.5A2.75 2.75 0 0015.25 4H4.75zM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5zm1.5.75c.28 0 .5.22.5.5v1.5h2V8a.5.5 0 011 0v4a.5.5 0 01-1 0v-1.5H5V12a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM9 8c0-.28.22-.5.5-.5h.25c1.24 0 2.25 1 2.25 2.25v.5c0 1.24-1 2.25-2.25 2.25H9.5A.5.5 0 019 12V8zm1 3.47c.57-.11 1-.62 1-1.22v-.5c0-.6-.43-1.1-1-1.22v2.95zM13 8c0-.28.22-.5.5-.5h1a1.5 1.5 0 01.87 2.72l.6 1.6a.5.5 0 01-.94.36l-.63-1.68H14V12a.5.5 0 01-1 0V8zm1 1.5h.5a.5.5 0 000-1H14v1z"/>
</svg>

  );
}
export default HdrIcon;