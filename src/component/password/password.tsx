import { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("#808000");
  const [textColor, settextColor] = useState("#ffffff");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdehijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()~`,";

    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    return () => {};
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className=" flex flex-col h-svh content-center">
      <div className="flex w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white bg-gray-800">
        <div className="px-2 ">
          <h1 className="text-white font-mono text-2xl  my-1 ">
            Home Sweet Home
          </h1>
          <p className="text-slate-300 my-2 ">
            Secure your device with password
          </p>
        </div>

        <div className="h-full w-auto content-end">
          <input
            type="color"
            defaultValue={color}
            className="outline-none rounded-md h-full  p-1 border-spacing-2"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />

          <input
            type="color"
            defaultValue={textColor}
            className="outline-none mx-2 rounded-md h-full  p-1 border-spacing-2"
            onChange={(e) => {
              settextColor(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white bg-gray-800"
        style={{ backgroundColor: color }}
      >
        <h1 className=" text-center my-3" style={{ color: textColor }}>
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
            onClick={copyPasswordtoClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              id="lengthInput"
              className="cursor-pointer"
              onChange={(e: any) => {
                setLength(e.target.value);
              }}
            />

            <label htmlFor="lengthInput">{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput" style={{ color: textColor }}>
              Number
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="CharInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="CharInput" style={{ color: textColor }}>
              Special Charactor
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
