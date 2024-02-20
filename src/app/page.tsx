'use client';
import React, { useEffect, useRef, useState } from 'react';
import loveAnimation from '@/assets/animation/love-animation.json';
import Lottie from 'react-lottie';


const TestPage = () => {
    const noButtonRef = useRef<HTMLButtonElement>(null);
    const [text, setText] = useState<string>('Do you love me ?');
    const handleRandomPosition = () => {
        if (noButtonRef.current) {
            const button = noButtonRef.current;
            button.style.position = 'absolute';
            const buttonWidth = button.offsetWidth;
            const buttonHeight = button.offsetHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const maxX = windowWidth - buttonWidth;
            const maxY = windowHeight - buttonHeight;
            const x = Math.floor(Math.random() * maxX);
            const y = Math.floor(Math.random() * maxY);
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }
    }


    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: loveAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <div className='h-screen flex items-center justify-center w-screen overflow-hidden'>
            <div className="py-8 px-8 border rounded-xl flex items-center justify-center flex-col">
                {text === 'Aww..! Thanks..' && <Lottie options={defaultOptions}
                    isClickToPauseDisabled
                    height={200}
                    width={200}

                />}
                <h1 className='text-xl'>{text}</h1>
                <div className="flex items-center gap-3 mt-7" id='box'>
                    <button onClick={() => {
                        setText('Aww..! Thanks..');
                        const buttonBox = document.getElementById('box');
                        if (buttonBox) {
                            buttonBox.style.display = 'none';
                        }
                        setTimeout(() => {
                            setText('Do you love me ?');
                            if (buttonBox) {
                                buttonBox.style.display = 'flex';
                            }
                        }, 5000);
                    }} className='px-3 py-2 text-white rounded-xl bg-green-500'>Yes</button>
                    <button onMouseEnter={handleRandomPosition} ref={noButtonRef} className='px-4 text-white  rounded-xl bg-red-500  py-2'>No</button>
                </div>
            </div>
        </div>
    );
};

export default TestPage;