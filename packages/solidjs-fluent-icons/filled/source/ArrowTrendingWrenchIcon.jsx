import { splitProps } from "solid-js";
function ArrowTrendingWrenchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.75 3a.75.75 0 01.75.75v4.5c0 .26-.14.5-.34.63a1.38 1.38 0 00-1.15-.9H16V5.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 8.06l-4.72 4.72a.75.75 0 01-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 010-1.5h4.5zm-.65 6.71c.26-.26.16-.7-.2-.74a3.5 3.5 0 00-3.71 4.66l-2.72 2.7a1.5 1.5 0 002.13 2.13l2.7-2.71a3.5 3.5 0 004.66-3.7c-.04-.37-.48-.48-.74-.22l-.97.97a1.5 1.5 0 11-2.12-2.12l.97-.97z"/>
    </svg>);
}
export default ArrowTrendingWrenchIcon;
