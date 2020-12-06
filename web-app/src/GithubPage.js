import React from 'react';

class GithubPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show:true
        }
    }

    showPrivacyPolicy = (e) => {
        this.setState({
            show:true
        });
    }

    showAbout = (e) => {
        this.setState({
            show: false
        });
    }

    render(){
        return (
            <div>

                <div class="fixed-top">


                    <nav class="navbar navbar-dark bg-dark">

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <form class="form-inline">
                            <a class="btn btn-success my-2 my-sm-0" href="https://github.com/ravindusamaraweera/payment-chart" type="button">View in Github</a>
                        </form>
                        <a class="navbar-brand" style={{
                            position: "absolute",
                            color: "#fff",
                            marginLeft: 75
                        }}>
                            {"Payment Chart"}
                        </a>
                    </nav>

                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <a class="text-white h5" onClick={this.showPrivacyPolicy}>Privacy Policy</a>
                            <div
                                style={{
                                    width: "100%",
                                    height: 10
                                }}
                            >

                            </div>
                            <a class="text-white h5" onClick={this.showAbout}>About</a>
                        </div>
                    </div>

                </div>

                <PrivacyPolicy
                    show={this.state.show}
                />

                <About
                    show={this.state.show}
                />

                <div
                    style={{
                        position: "fixed",
                        left: 0,                        
                        bottom: 0,
                        width: "100%",
                        backgroundColor:"#f8f9fa"
                    }}
                >
                    <p style={{
                        textAlign: "center",
                        paddingTop: 15,
                        fontSize:12
                    }}>
                        2020  &#169; Payment Chart - ravindusamaraweera@gmail.com
                    </p>

                </div>
                

            </div>

        );
    }
    
}

function CustomCard(props){
    return(
        <div class="card" style={{
            marginTop: 10
        }}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                {props.children}
            </div>
        </div>
        
    );
}

function PrivacyPolicy(props){
    if(props.show){
        return(

            <div>

                <div class="card" style={{
                    marginTop: 80
                }}>
                    <div class="card-body">
                        <h5 class="card-title">Privacy Policy</h5>
                        <p class="card-text" style={{ textAlign: "justify" }}>
                            Ravindu built the Payment Chart app as a Free app. This SERVICE is provided by Ravindu at no cost and is intended for use as is.
                    </p>

                        <p class="card-text" style={{ textAlign: "justify" }}>
                            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
                    </p>

                        <p class="card-text" style={{ textAlign: "justify" }}>
                            If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
                    </p>

                        <p class="card-text" style={{ textAlign: "justify" }}>
                            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Music book unless otherwise defined in this Privacy Policy.
                    </p>

                    </div>
                </div>

                <CustomCard
                    title={"Information Collection and Use"}
                >
                    <p style={{ textAlign: "justify" }}>For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to song. The information that I request will be retained on your device and is not collected by me in any way.</p>

                    <p style={{ textAlign: "justify" }}>The app does use third party services that may collect information used to identify you.</p>

                    <p style={{ textAlign: "justify" }}>Link to privacy policy of third party service providers used by the app</p>

                    <div class="form-check" style={{ marginLeft: 16 }}>
                        <input class="form-check-input" type="radio" name="exampleRadios10" id="exampleRadios10" value="option1" checked />
                        <a href="https://policies.google.com/privacy">Google Play Services</a>
                    </div>

                </CustomCard>

                <div class="card" style={{
                    marginTop: 10
                }}>
                    <div class="card-body">
                        <h5 class="card-title">Log Data</h5>
                        <p class="card-text" style={{ textAlign: "justify" }}>
                            want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
                    </p>

                    </div>
                </div>

                <div class="card" style={{
                    marginTop: 10
                }}>
                    <div class="card-body">
                        <h5 class="card-title">Cookies</h5>
                        <p class="card-text" style={{ textAlign: "justify" }}>
                            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                    </p>

                        <p class="card-text" style={{ textAlign: "justify" }}>
                            This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                    </p>

                    </div>
                </div>

                <CustomCard
                    title={"Service Providers"}
                >
                    <p class="card-text" style={{ textAlign: "justify" }}>
                        I may employ third-party companies and individuals due to the following reasons:
                </p>

                    <div class="form-check" style={{ marginLeft: 16 }}>
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <a>To facilitate our Service;</a>
                    </div>

                    <div class="form-check" style={{ marginLeft: 16, paddingTop: 2 }}>
                        <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2" value="option2" checked />
                        <a>To provide the Service on our behalf;</a>
                    </div>

                    <div class="form-check" style={{ marginLeft: 16, paddingTop: 2 }}>
                        <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios3" value="option2" checked />
                        <a>To perform Service-related services; or</a>
                    </div>

                    <div class="form-check" style={{ marginLeft: 16, paddingTop: 2 }}>
                        <input class="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios4" value="option2" checked />
                        <a>To assist us in analyzing how our Service is used.</a>
                    </div>

                    <p class="card-text" style={{ marginTop: 10 }}>
                        I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                </p>

                </CustomCard>

                <CustomCard
                    title={"Security"}
                >
                    <p class="card-text" style={{ textAlign: "justify" }}>
                        I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
                </p>
                </CustomCard>

                <CustomCard
                    title={"Links to Other Sites"}
                >
                    <p class="card-text" style={{ textAlign: "justify" }}>
                        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
                </CustomCard>

                <div class="card" style={{
                    marginTop: 10
                }}>
                    <div class="card-body">
                        <h5 class="card-title">Children’s Privacy</h5>
                        <p class="card-text" style={{ textAlign: "justify" }}>
                            These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.
                    </p>

                    </div>
                </div>

                <CustomCard
                    title={"Changes to This Privacy Policy"}
                >
                    <p class="card-text" style={{ textAlign: "justify" }}>
                        I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                    <p class="card-text" style={{ textAlign: "justify" }}>
                        This policy is effective as of 2020-12-06
                </p>

                </CustomCard>

                
                <div class="card" style={{
                    marginTop: 10,
                    marginBottom:70
                }}>
                    <div class="card-body">
                        <h5 class="card-title">Contact Us</h5>
                        <p class="card-text" style={{ textAlign: "justify" }}>
                            If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at General.
                        </p>
                    </div>
                </div>

            </div>

        );
    } else {
        return null;
    }
}

function About(props){
    if(!props.show){
        return(
            <div class="card" style = {{
                    marginTop: 80
                }
            }>
                <div class="card-body">
                    <h5 class="card-title">About</h5>
                    <p class="card-text" style={{ textAlign: "justify" }}>
                        This is an android mobile application that helps you to keep track of your payments informations in one place. This is used React, React Native, Firebase as the 
                        development and Github as the source control.
                    </p>
                </div>
                
            </div>
        );
    } else {
        return null
    }
}

export default GithubPage;