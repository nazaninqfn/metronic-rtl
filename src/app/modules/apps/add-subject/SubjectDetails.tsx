import { FC, useState } from 'react'
import * as Yup from 'yup'
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../../accounts/components/settings/SettingsModel'
import { useFormik } from 'formik'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  NId: Yup.string().required('national code is required'),
  lName: Yup.string().required('Last name is required'),
  SId: Yup.string().required('student code is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  Email: Yup.string().required('Email  is required'),
  BDate: Yup.string().required('Bearth Date is required'),
  educ: Yup.string().required('education Date is required'),
  address: Yup.string().required('address  is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const SubjectDetails: FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>افزودن دوره</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>

            <div className='row mb-6'>
              
              <div className="col-lg-8">

                <div className='col-lg-12'>
                  <div className='row'>

                    <div className='col-lg-6 fv-row'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>نام دوره </label>

                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='First name'
                        {...formik.getFieldProps('fName')}
                      />
                      {formik.touched.fName && formik.errors.fName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.fName}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'> نام مدرس </label>

                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Last name'
                        {...formik.getFieldProps('lName')}
                      />
                      {formik.touched.lName && formik.errors.lName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.lName}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>کد دوره </label>

                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='کد ملی '
                        {...formik.getFieldProps('NId')}
                      />
                      {formik.touched.NId && formik.errors.NId && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.NId}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'> محل برگزاری  </label>

                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          placeholder='شماره دانشجویی '
                          {...formik.getFieldProps('SId')}
                        />
                        {formik.touched.SId && formik.errors.SId && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.SId}</div>
                          </div>
                        )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <label className='col-lg-4 col-form-label fw-bold fs-6'>
                        <span className='required'>تاریخ شروع</span>
                      </label>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='تاریخ '
                        {...formik.getFieldProps('BDate')}
                      />
                      {formik.touched.BDate && formik.errors.BDate && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.BDate}</div>
                        </div>
                      )}
                    </div>

                    
                    <div className='col-lg-6 fv-row'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>تاریخ پایان </label>

                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='تحصیلات'
                        {...formik.getFieldProps('educ')}
                      />
                      {formik.touched.educ && formik.errors.educ && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.educ}</div>
                        </div>
                      )}
                    </div>


                    


                  </div>
                </div>
              </div>

              
              

            </div>



            <div className='row mb-6'>
              <div className='col-lg-4 fv-row'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'> ظرفیت</span>
                </label>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...formik.getFieldProps('MPhone')}
                />
                {formik.touched.MPhone && formik.errors.MPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.MPhone}</div>
                  </div>
                )}
              </div>
              <div className='col-lg-4 fv-row'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>ساعات حضور</span>
                </label>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='حداقل میزان حضور دانش اموز جهت قبولی'
                  {...formik.getFieldProps('MPhone')}
                />
                {formik.touched.MPhone && formik.errors.MPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.MPhone}</div>
                  </div>
                )}
              </div>


              
            </div>

            
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {SubjectDetails}
