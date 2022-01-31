import React from "react";
import { Row, Button, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import LoginRegister from "./../../components/loginRegister";
import FieldInput from "../../components/field/Input";
import FieldSelect from "../../components/field/Select";
import FieldInputPassword from "../../components/field/InputPassword";
import validate from "./registerValidate";
import { StyledFooterRegister, StyledLink } from "./styledRegister";
import { StyledForm } from '../../components/styled'

const Register = ({ handleSubmit, submitting, postNewUsers }) => {

  function saveUSers(value) {
    postNewUsers(value);
  }

  return (
    <LoginRegister title="إنشاء حساب">
      <Col xs={24}>
        <StyledForm onSubmit={handleSubmit(saveUSers)}>
          <Row gutter={24}>
            <Col xs={12}>
              <Field
                type="text"
                name="firstName"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "الإسم الأول",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={12}>
              <Field
                type="text"
                name="lastName"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder:"الإسم العائلي",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="email"
                name="email"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "البريد الإلكتروني",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={12}>
              <Field
                type="password"
                name="password"
                component={FieldInputPassword}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "كلمة السر",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={12}>
              <Field
                type="number"
                name="phone"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "الهاتف",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="text"
                name="address"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "العنوان",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>

            <Col xs={12}>
              <Field
                type="text"
                name="gendre"
                component={FieldSelect}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "الجنس",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              >
                <Select.Option value="Male">مذكر</Select.Option>
                <Select.Option value="Female">مؤنث</Select.Option>
              </Field>
            </Col>
            <Col xs={12}>
              <Field
                type="text"
                name="typeAccount"
                component={FieldSelect}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "نوع الحساب",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              >
                <Select.Option value="Admin"> أذمين </Select.Option>
                <Select.Option value="User"> مستخدم </Select.Option>
              </Field>
            </Col>
            <StyledFooterRegister xs={24}>
              <Button
                size="large"
                icon="save"
                htmlType="submit"
                type="primary"
                disabled={submitting}
              >
                إنشاء
              </Button>
            </StyledFooterRegister>
            <StyledLink xs={24}>
              <Link to="/login">أملك حسابا</Link>
            </StyledLink>
          </Row>
        </StyledForm>
      </Col>
    </LoginRegister>
  );
};

export default reduxForm({
  form: "Register",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(Register);
