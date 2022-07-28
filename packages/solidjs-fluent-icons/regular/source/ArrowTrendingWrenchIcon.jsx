import { splitProps } from "solid-js";
function ArrowTrendingWrenchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V4.7l-4.65 4.65a.5.5 0 01-.7 0L9 7.71l-5.15 5.14a.5.5 0 01-.7-.7l5.5-5.5a.5.5 0 01.7 0L11 8.29 15.3 4h-2.8a.5.5 0 010-1h4zm-.4 6.71c.26-.26.16-.7-.2-.74a3.5 3.5 0 00-3.71 4.66l-2.72 2.7a1.5 1.5 0 002.13 2.13l2.7-2.71a3.5 3.5 0 004.66-3.7c-.04-.37-.48-.48-.74-.22l-.97.97a1.5 1.5 0 11-2.12-2.12l.97-.97z"/>
    </svg>);
}
export default ArrowTrendingWrenchIcon;
