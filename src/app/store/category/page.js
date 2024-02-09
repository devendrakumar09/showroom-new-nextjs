import React from 'react'
import CategoryUi from '@/app/ui/store/category/Category'
import NewCategory from '@/app/ui/store/category/new/New'
const Category = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
              <div className="col-sm-4">
                <CategoryUi />      
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="addNewCategory fixedPosition">
              <NewCategory />  

            </div>                    
          </div>
        </div>
      </div>
    </>
  )
}

export default Category