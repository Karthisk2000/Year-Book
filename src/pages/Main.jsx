import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs'
import { TfiText } from 'react-icons/tfi'
import { FaCloudUploadAlt, FaShapes } from 'react-icons/fa'
import { RxTransparencyGrid } from 'react-icons/rx'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import TemplateDesign from '../components/main/TemplateDesign'
import MyImages from '../components/MyImages'
import Projects from '../components/Projects'
import Image from '../components/Image'
import background from '../components/main/background.jpg'
import background_two from '../components/main/background_two.jpg'
import CreateComponent from '../components/CreateComponent'

export default function Main() {
    // console.log("\n -------------------- main --------------------")

    const [currentComponent, setCurrentComponent] = useState('')
    const [color, setColor] = useState('')
    const [image, setImage] = useState('')
    const [rotate, setRotate] = useState(0)


    const [state, setState] = useState('');
    const [show, setShow] = useState({
        status: true,
        name: ''
    });

    const setElements = (type, name) => {
        setState(type)
        setShow({
            state: false,
            name
        })
    }


    const moveElement = () => {
        console.log('\n ---------------- mone element ----------------------')
    }

    const resizeElement = () => {
        console.log('\n ---------------- resize element -------------------')
    }

    const rotateElement = () => {
        console.log('\n ---------------- rotate element -----------------')
    }

    const [components, setComponents] = useState([
        {
            name: 'main_frame',
            type: 'rect',
            id: Math.floor((Math.random() * 100) + 1),
            height: 450,
            width: 350,
            z_index: 1,
            color: '#fff',
            image: '',
            setCurrentComponent: (a) => setCurrentComponent(a)
        }
    ])




    const removeComponent = (id) => {
        console.log('\n --------------- remove component ---------------------')
        const temp = components.filter(c => c.id !== id)
        console.log('\n temptemptemptemptemptemp', temp)
        setCurrentComponent('')
        setComponents(temp)
    }

    const removeBackground = () => {
        console.log('\n ----------------------- remove background --------------------')
        const com = components.find(c=>c.id === currentComponent.id)
        const temp = components.filter(c => c.id !== currentComponent.id)
        com.image = ''
        setImage('')
        setComponents([...temp, com])

    } 

    const createShape = (name, type) => {
        const style = {
            id : components.length + 1,
            name : name,
            type,
            left : 10,
            top : 10,
            opacity : 1,
            width : 200,
            height : 150,
            rotate,
            z_index : 2,
            color : '#3c3c3d',
            setCurrentComponent : (a) => setCurrentComponent(a),
            removeBackground : ()=> setImage(''),
            moveElement,
            resizeElement,
            rotateElement,
        }
        // setCurrentComponent(style)
        setComponents([...components, style])
    }






    // console.log('\n <---------------- current component--------------------->', currentComponent)

    useEffect(() => {
        // console.log('\n ----------- use effect ---------------------- currentComponent.id', currentComponent.id)
        if (currentComponent) {
            const index = components.findIndex(c => c.id === currentComponent.id)
            // console.log('\n index ', index)
            const temp = components.filter(c => c.id !== currentComponent.id)
            // console.log('\n temptemptemp', temp)
            if (currentComponent.name === 'main_frame' && image) {
                components[index].image = image || currentComponent.image
            }
            components[index].color = color || currentComponent.color

            setComponents([...temp, components[index]])
        }

    }, [color, image])




    return (
        <div className='min-w-screen h-screen bg-black' style={{ background: 'rgba(229, 231, 247, 0.77)' }}>

            {/* <div className='min-w-screen h-screen bg-black'> */}
            <Header />
            <div className='flex h-[calc(100%-60px)] w-screen'>

                <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>

                    <div onClick={() => setElements('design', 'design')} className={`${show.name ===
                        'design' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><BsGrid1X2 /></span>
                        <span className='text-xs font-medium'>Design</span>
                    </div>

                    <div onClick={() => setElements('shape', 'shape')} className={`${show.name === 'shape' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><FaShapes /></span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>

                    <div onClick={() => setElements('image', 'uploadImage')} className={`${show.name === 'uploadImage' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='text-xs font-medium'>Upload</span>
                    </div>

                    <div onClick={() => setElements('text', 'text')} className={`${show.name === 'text' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><TfiText /></span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>

                    <div onClick={() => setElements('project', 'projects')} className={`${show.name === 'projects' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><BsFolder /></span>
                        <span className='text-xs font-medium'>Project</span>
                    </div>

                    <div onClick={() => setElements('initImage', 'images')} className={`${show.name === 'images' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><BsFillImageFill /></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>

                    <div onClick={() => setElements('background', 'background')} className={`${show.name === 'background' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100 `}>
                        <span className='text-2xl'><RxTransparencyGrid /></span>
                        <span className='text-xs font-medium'>Background</span>
                    </div>

                </div>

                <div className='h-full w-[calc(100%-75px)]'>
                    <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                        <div onClick={() => setShow({ name: '', status: true })} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full' >
                            < MdKeyboardArrowLeft />
                        </div>

                        {
                            state === 'design' && <div>
                                <div className='grid grid-cols-2 gap-2'>
                                    <TemplateDesign />
                                </div>
                            </div>
                        }
                        {
                            state === 'shape' && <div className='grid grid-cols-3 gap-2'>
                                <div onClick={() => createShape('shape', 'rect')} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                                <div onClick={() => createShape('shape', 'circle')} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                                <div onClick={() => createShape('shape', 'trangle')} style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                            </div>
                        }
                        {
                            state === 'image' && <MyImages />
                        }
                        {
                            state === 'text' && <div>
                                <div className='grid grid-cols-1 gap-2'>
                                    <div className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
                                        <h2>Add a Text</h2>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            state === 'project' && <Projects />
                        }
                        {
                            state === 'initImage' && <div className='h-[80vh] overflow-x-auto flex justify-start items-start 
                            scrollbar-hide'>
                                <Image />
                            </div>
                        }
                        {
                            state === 'background' && <div className='h-[80vh] overflow-x-auto flex justify-start items-start 
                            scrollbar-hide'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {
                                        [background, background_two].map((img, i) => <div onClick={() => setImage(img)} key={i} className='w-full h-[100px] 
                                            overflow-hodden rounded-sm cursor-pointer'>
                                            <img className='w-full h-full object-fill' src={img} alt='image' />
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    <div className='w-full flex h-full'>
                        <div className={`flex justify-center relative items-center h-full 
                        ${!currentComponent ? 'w-full' : "w-[calc(100%-250px)] overflow-hidden"}`}>
                            <div className='m-w-[650px] m-h-[480px] flex justify-center 
                            items-center overflow-hidden'>
                                <div id='main_design' className='w-auto relative h-auto overflow-hidden'>
                                    {   
                                        // console.log('\n components ..............', components)
                                        components.map((c, i) => <CreateComponent key={i}
                                            info={c} current_component={currentComponent}
                                            removeComponent={removeComponent} />)
                                    }
                                </div>
                            </div>
                        </div>

                        

                        {
                            currentComponent && <div className='h-full w-[250px] 
                            text-gray-300 bg-[#252627] px-3 py-2'>
                                <div className='flex gap-3 flex-col items-start h-full px-3
                                justify-start'>
                                    <div className='flex gap-4 justify-start items-start'>
                                        <span>Color : </span>
                                        <label className='w-[30px] h-[30px] cursor-pointer 
                                        rounded-ms' style={{
                                                background: `${currentComponent.color &&
                                                    currentComponent.color !== '#fff' ? currentComponent.color : 'gray'}`
                                            }}
                                            htmlFor='color' ></label>
                                        <input onChange={(e) => setColor(e.target.value)} type='color' className='invisible' id='color' />
                                    </div>
                                    {
                                        (currentComponent.name === 'main_frame' && 
                                        image) && <div>
                                        <button className='p-[6px] bg-slate-700 text-white 
                                        rounded-sm' onClick={removeBackground}>Remove background</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    {/* <div className="add-page-container">
      <button onClick={addPage} className="p-3 bg-blue-500 text-white rounded">
        Add Page
      </button>
    </div> */}
                </div>
            </div>
        </div>
    )
}