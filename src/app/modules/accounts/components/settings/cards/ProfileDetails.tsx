import {useState, FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'

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

const ProfileDetails: FC = () => {
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
          <h3 className='fw-bolder m-0'>Profile Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>

            <div className='row mb-6'>
              <div className='col-lg-4'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>تصویر کاربری</label>
              <div className='col-lg-12'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-225px h-225px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>
                </div>
              </div>
              </div>
              <div className="col-lg-8">

                <div className='col-lg-12'>
                  <div className='row'>

                    <div className='col-lg-6 fv-row'>
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>نام </label>

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
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'> نام خانوادگی </label>

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
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>کد ملی </label>

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
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>شماره دانشجویی  </label>

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
                        <span className='required'>تاریخ تولد</span>
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
                      <label className='col-lg-4 col-form-label required fw-bold fs-6'>تحصیلات </label>

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
                  <span className='required'>شماره تماس</span>
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
                  <span className='required'> تلفن ثابت</span>
                </label>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...formik.getFieldProps('contactPhone')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>

              <div className='col-lg-4 fv-row'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>ایمیل</span>
                </label>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='ایمیل'
                  {...formik.getFieldProps('Email')}
                />
                {formik.touched.Email && formik.errors.Email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.Email}</div>
                  </div>
                )}
              </div>

                
            </div>

            <div className='row mb-6'>
              

              <div className='col-lg-12 fv-row'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>آدرس محل سکونت</span>
              </label>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='آدرس محل سکونت'
                  {...formik.getFieldProps('address')}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.address}</div>
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

export {ProfileDetails}
