import React, { useEffect, useState } from 'react'
import BoardNavbar from '../components/BoardNavbar'
import { Outlet } from 'react-router-dom'
import NewApplicationModal from '../components/NewApplicationModal';
import type { JobApplicationCard } from '../lib/types';
import { createApplication, getAllApplications, updateApplicationStatus } from '../api/applications';

const AppLayout = () => {

  const [ isModalOpen, setModalOpen ] = useState(false);
  const [applications, setApplications] = useState<JobApplicationCard[]>([])

  const addApplication = async (data: Omit<JobApplicationCard, "id">) => {
      const created = await createApplication(data);
      setApplications((prev) => [...prev, created]);
  }

  const updateApplicationStage = async ( id: number, status: string ) => {
      setApplications((prev) => prev.map((item) => item.id === id ? {...item, status} : item))
      try{
        await updateApplicationStatus(id, status);
      } catch(error){
        console.error(error)
      }
  }

  useEffect(() => {
    const fetchApplications = async () => {
      const apps = await getAllApplications();
      console.log(apps)
      setApplications(apps);
    }

    fetchApplications();
  }, [])


  return (  
    <>
        <BoardNavbar onNewApplication={() => setModalOpen(true)}/>
        <Outlet context={{ applications, updateApplicationStage }} />
        {isModalOpen && <NewApplicationModal onClose={ () => setModalOpen(false)} onSubmit={addApplication}/> }
    </>
  )
}

export default AppLayout