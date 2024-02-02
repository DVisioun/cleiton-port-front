import { faCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Divider, GridColumn, Segment } from 'semantic-ui-react'

function CardBlog() {
  return (
    <div className="relative w-full px-4">
        <Segment raised className="!relative !rounded-2xl !bg-secondary h-[350px] !p-[50px] sm-1:p-[20px] overflow-hidden">
            <h1>Nome do Post</h1>
            <p className="line-clamp-6" >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
              only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="h-[2px] w-full bg-[var(--gold)] mt-20 sm-1:mt-14"></div>
            <div className='flex justify-between mb-4'>
              <div>
                <p className='m-0'>
                  Cleiton Moreira 
                  <FontAwesomeIcon icon={faCircle} className='text-[4px] sm-1:hidden mx-2 align-middle'/>
                  <span className='sm-1:hidden'>24 de jan. de 2024</span>
                </p>
                <p className='hidden sm-1:inline'>24 de jan. de 2024</p>
              </div>
              <div className='flex items-center gap-1'>
                <FontAwesomeIcon icon={faHeart} className='text-[var(--gold)]' />
                <p>25</p>
              </div>
            </div>
        </Segment>
    </div>
  )
}

export default CardBlog