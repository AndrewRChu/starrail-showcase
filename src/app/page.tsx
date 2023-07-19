"use client";

import { useState } from "react";

export default function Home() {
    const [uid, setUid] = useState("");

    return (
        <div>
            <div className="flex justify-center m-16">
                <form action={uid.toString()}>
                    <div className="flex flex-col items-center gap-4">
                        <input
                            type="text"
                            pattern="[1-25-9][0-9]{8}"
                            className="py-2 px-4 w-40 bg-[rgba(0,0,0,0.5)] border-4 border-[rgba(255,255,255,0.1)] outline-none rounded-full text-center"
                            placeholder="UID"
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-white text-black w-fit py-2 px-6 rounded-full outline-double hover:cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
