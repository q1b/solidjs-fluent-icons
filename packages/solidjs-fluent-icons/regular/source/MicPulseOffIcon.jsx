import { splitProps } from "solid-js";
function MicPulseOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 6.7V10a3 3 0 003.2 3c.12-.4.27-.76.46-1.11A2 2 0 017 10V7.7l3.98 4a4.5 4.5 0 006.37 6.29.5.5 0 00.5-.84l-15-15a.5.5 0 10-.7.7L6 6.71zm9.11 9.12l-.15.37a.5.5 0 01-.93-.02l-.64-1.8-.22.5a.5.5 0 01-.46.3H12a.5.5 0 010-1h.38l.33-.76 2.4 2.4zM11 5v3.88l.82.82.18-.1V5a3 3 0 00-5.84-.96l.84.84A2 2 0 0111 5zm7.56 11.44a4.5 4.5 0 00-6-6l6 6zM4.5 10A4.5 4.5 0 009 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0z"/>
    </svg>);
}
export default MicPulseOffIcon;
