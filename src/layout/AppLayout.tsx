import React, { useState } from 'react'
import BoardNavbar from '../components/BoardNavbar'
import { Outlet } from 'react-router-dom'
import NewApplicationModal from '../components/NewApplicationModal';
import type { JobApplicationCard } from '../lib/types';

const AppLayout = () => {

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [applications, setApplications] = useState<JobApplicationCard[]>([])

  const addApplication = (data: Omit<JobApplicationCard, "id">) => {
      setApplications((prev) => [...prev, {...data, id: crypto.randomUUID()}])
  }

  const updateApplicationStage = ( id: string, stageId: string ) => {
    setApplications((prev) => prev.map((app) => app.id === id ? {...app, stageId: stageId} : app))
  }
  return (  
    <>
        <BoardNavbar onNewApplication={() => setModalOpen(true)}/>
        <Outlet context={{ applications, updateApplicationStage }} />
        {isModalOpen && <NewApplicationModal onClose={ () => setModalOpen(false)} onSubmit={() => addApplication}/> }
    </>
  )
}

export default AppLayout