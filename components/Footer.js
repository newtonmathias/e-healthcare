function Footer() {
    return (
      <div className="bg-indigo-500 text-white">
        <h3 className="ml-32 py-6 text-2xl">Find a doctor by</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 gap-y-10 px-32 pb-14">
          <div className="space-y-4 text-lg text-white">
              <h5 className="font-bold border-b pb-3 text-color1">LOCATION</h5>
              <p>Nairobi</p>
              <p>Mombasa</p>
              <p>Kisumu</p>
              <p>Nakuru Plus</p>
              <p>Kitui </p>
          </div>
          
          <div className="space-y-4 text-lg text-white">
              <h5 className="font-bold border-b pb-3 text-color1">CARE TYPE</h5>
              <p>Urgent Care </p>
              <p>Prescription Refills</p>
              <p>Mental Health</p>
              <p>Men&apos;s Health</p>
              <p>Women&apos;s Health</p>
          </div>
          
          <div className="space-y-4 text-lg text-white">
              <h5 className="font-bold border-b pb-3 text-color1">SPECIALITY</h5>
              <p>General Doctor</p>
              <p> Primary Care</p>
              <p>Family Medicine</p>
              <p>Therapist</p>
              <p>Dermatology</p>
          </div>
          
          <div className="space-y-4 text-lg text-white">
              <h5 className="font-bold border-b pb-3 text-color1">SYMPTOM</h5>
              <p>Headache</p>
              <p>Chest pain</p>
              <p>Depression</p>
              <p>Sore throat</p>
              <p>Difficulty breathing</p>
          </div>
          
          
      </div>
      </div>
    )
  }
  
  export default Footer