import { splitProps } from "solid-js";
function DrinkBottleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 3.5c0 .64.4 1.18.96 1.4-.12.5-.47.88-1 1.43l-.33.34a4.3 4.3 0 00-1.62 3.61L5 10.5v5a2.5 2.5 0 003.75 2.17 2.49 2.49 0 002.5 0A2.5 2.5 0 0015 15.5v-5l-.01-.22a4.07 4.07 0 00-.67-2.56c-.4-.6-.86-1.04-1.24-1.42l-.01-.01c-.55-.54-.9-.9-1.02-1.4A1.5 1.5 0 0011.5 2h-3C7.67 2 7 2.67 7 3.5zm-1 12V15h8v.5a1.5 1.5 0 01-2.44 1.17.5.5 0 00-.62 0 1.5 1.5 0 01-1.88 0 .5.5 0 00-.62 0A1.5 1.5 0 016 15.5zM8.96 5h2.09c.16.86.74 1.43 1.27 1.96l.05.04H7.7l.02-.01C8.24 6.45 8.8 5.87 8.96 5zm2.54-1h-3a.5.5 0 010-1h3a.5.5 0 010 1z"/>
    </svg>);
}
export default DrinkBottleIcon;
