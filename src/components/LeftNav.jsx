


import React, { useContext, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { UserContext } from '../contexts'
import { itemMenu } from '../utils'
import { LeftNavMenueItems } from './LeftNavMenueItems'

export const LeftNav = () => {

  const { mostrarMenu } = useContext(UserContext);

  const [cualName, setcualName] = useState(
    {
      name: "",
    }
  )

  const selectName = (name) => {
    setcualName({
      name: name
    })
  }

  return (
    <div className='mb:block w-[240px] overflow-y-auto h-[88%] bg-black absolute md:absolute z-10 translate-x-[-240] md:translate-x-0 transition-all '>

      <div className='flex flex-col'>
        {
          itemMenu.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <LeftNavMenueItems
                  name={item.name}
                  icon={item.icon}
                  action={() => { selectName(item.name) }}
                  className={
                    cualName.name === item.name ? "bg-white/[0.15]" : ""
                  }
                  esde={item.type}
                  key={item.name}
                />
                {
                  item.dividir && <div className="w-full h-[1px] bg-white/[0.15] my-2"></div>
                }
              </React.Fragment>
            )
          }

          )

        }


      </div>
    </div>
  )
}
