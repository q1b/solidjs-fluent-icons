
import { splitProps, ComponentProps, JSX } from "solid-js";

function BuildingSkyscraperIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 8.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7.5 11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm5.25 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7 2a.5.5 0 00-.5.5V4h-.94a.5.5 0 00-.5.5v1.74A2 2 0 004 8v8.5c0 .27.22.5.5.5h12a.5.5 0 00.5-.5v-4A4.5 4.5 0 0012.5 8H12a2 2 0 00-.94-1.7V4.5a.5.5 0 00-.5-.5H9.5V2.5A.5.5 0 009 2H7zm3 4H6.06V5h4v1H10zm1 10h-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2H5V8a1 1 0 011-1h4a1 1 0 011 1v8zm-4 0v-2h2v2H7zm9 0h-4V9h.5a3.5 3.5 0 013.5 3.5V16zM8.5 4h-1V3h1v1z"/>
</svg>

  );
}
export default BuildingSkyscraperIcon;