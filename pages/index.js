import Head from 'next/head'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import QueueAnim from 'rc-queue-anim';

const FormItem = Form.Item
const Option = Select.Option

export default () => (
  <LocaleProvider locale={enUS}>
    <div style={{ marginTop: 100 }}>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
      </Head>
      <QueueAnim type="bottom" component={Form} layout='horizontal'>
        <FormItem
          label='Input Number'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          key="0"
        >
          <InputNumber size='large' min={1} max={10} style={{ width: 100 }} defaultValue={3} name='inputNumber' />
          <a href='#'>Link</a>
        </FormItem>

        <FormItem
          label='Switch'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          key="1"
        >
          <Switch defaultChecked name='switch' />
        </FormItem>

        <FormItem
          label='Slider'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          key="2"
        >
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem
          label='Select'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          key="3"
        >
          <Select size='large' defaultValue='lucy' style={{ width: 192 }} name='select'>
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>disabled</Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label='DatePicker'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          key="4"
        >
          <DatePicker name='startDate' />
        </FormItem>
        <FormItem
          style={{ marginTop: 48 }}
          wrapperCol={{ span: 8, offset: 8 }}
          key="5"
        >
          <Button size='large' type='primary' htmlType='submit'>
            OK
          </Button>
          <Button size='large' style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </FormItem>
      </QueueAnim>
    </div>
  </LocaleProvider>
)
