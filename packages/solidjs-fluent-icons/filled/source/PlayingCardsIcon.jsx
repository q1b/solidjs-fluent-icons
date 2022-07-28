import { splitProps } from "solid-js";
function PlayingCardsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.07 13a2 2 0 001.41 2.46l5.46 1.47a2 2 0 002.45-1.41L16.93 6a2 2 0 00-1.41-2.46l-5.46-1.47A2 2 0 007.6 3.5L5.07 13zM5 4v5.38l1.77-6.64c.07-.27.19-.52.34-.74H7a2 2 0 00-2 2zM2.67 5.5L4 10.48V4a3 3 0 01.16-.96l-.08.02A2 2 0 002.67 5.5zM13 6a1 1 0 11-2 0 1 1 0 012 0zm-3 8a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>);
}
export default PlayingCardsIcon;
