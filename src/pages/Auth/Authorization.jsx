import { useState, useEffect } from "react";
import { GoMail, GoLock } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { useGlobalContext } from "../../context/useGlobalContext";
import * as S from "./Authorization.styled";

export const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const { login, register } = useGlobalContext();

  useEffect(() => {
    if (isLogin) {
      setFormData({ email: "", password: "" });
    }
  }, [isLogin]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin && !formData.name) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm() && isLogin) {
      login(formData);
    } else {
      register(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <S.Title>{isLogin ? "Login" : "Register"}</S.Title>
          <S.Description>
            {isLogin ? "Welcome back! Please log in to your account" : "Create a new account to get started"}
          </S.Description>
        </S.CardHeader>

        <S.Form onSubmit={handleSubmit}>
          {!isLogin && (
            <S.FormGroup>
              <S.Label htmlFor="name">Name</S.Label>
              <S.InputWrapper>
                <S.IconWrapper>
                  <FaRegUser size={15} />
                </S.IconWrapper>
                <S.Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </S.InputWrapper>
              {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
            </S.FormGroup>
          )}

          <S.FormGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.InputWrapper>
              <S.IconWrapper>
                <GoMail size={17} />
              </S.IconWrapper>
              <S.Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </S.InputWrapper>
            {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="password">Password</S.Label>
            <S.InputWrapper>
              <S.IconWrapper>
                <GoLock size={18} />
              </S.IconWrapper>
              <S.Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </S.InputWrapper>
            {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}
          </S.FormGroup>

          <S.Button type="submit">
            {isLogin ? "Login" : "Register"}
            <HiArrowRight size={15} />
          </S.Button>
        </S.Form>

        <S.Footer>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <S.LinkButton onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Register" : "Login"}</S.LinkButton>
        </S.Footer>
      </S.Card>
    </S.Container>
  );
};
