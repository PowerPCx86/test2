import {writable} from "svelte/store";

const light = "bg-gray-200";
const dark = "bg-zinc-900";
const light_text = "text-gray-100"
const dark_text = "text-zinc-900"

export const bgcolor = writable(light);
export const txt_color = writable(light_text);
export const inv_txt_color = writable(dark_text);

export const common_color = writable("bg-green-600")
export const common_txt_color = writable("text-green-600")

export const common_shape = writable("border border-green-600 rounded-md")


let counter = 0;
export function dark_mode(){
    counter +=1;
    if (counter %2 != 0)
    {
        bgcolor.set(dark)
        txt_color.set(dark_text)
        inv_txt_color.set(light_text)
    }
    else {
        bgcolor.set(light)
        txt_color.set(light_text)
        inv_txt_color.set(dark_text)
    }
}

