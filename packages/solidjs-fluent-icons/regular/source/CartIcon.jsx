import { splitProps } from "solid-js";
function CartIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3.5c0-.28.22-.5.5-.5h.44c.72 0 1.14.47 1.38.94.17.32.29.72.39 1.06H16a1 1 0 01.96 1.27l-1.5 5.28A2 2 0 0113.55 13H8.46a2 2 0 01-1.93-1.47L5.9 9.17l-.01-.03-1.03-3.5-.1-.33a5.2 5.2 0 00-.32-.91c-.16-.31-.3-.4-.5-.4H3.5a.5.5 0 01-.5-.5zm3.84 5.37l.66 2.4a1 1 0 00.96.73h5.08a1 1 0 00.96-.73L16 6H6l.84 2.87zM10 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z"/>
    </svg>);
}
export default CartIcon;
