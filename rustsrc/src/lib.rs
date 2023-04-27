use kakasi::IsJapanese;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn convert_romaji(line: String) -> String {
    // if kakasi::is_japanese(line.clone()) == IsJapanese::False {
    //     return "".to_string();
    // }
    let res: kakasi::KakasiResult = kakasi::convert(line);
    return res.romaji;
}
